import React, { useState } from 'react';

interface SSRSafeCollapsibleProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

interface SSRSafeCollapsibleContentProps {
  children: React.ReactNode;
}

interface SSRSafeCollapsibleTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const SSRSafeCollapsible: React.FC<SSRSafeCollapsibleProps> & {
  Content: React.FC<SSRSafeCollapsibleContentProps>;
  Trigger: React.FC<SSRSafeCollapsibleTriggerProps>;
} = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  children,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!disabled) {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }
  };

  return (
    <CollapsibleContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
      <div>{children}</div>
    </CollapsibleContext.Provider>
  );
};

const CollapsibleContext = React.createContext<{
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}>({
  isOpen: false,
  onOpenChange: () => {},
});

const CollapsibleContent: React.FC<SSRSafeCollapsibleContentProps> = ({ children }) => {
  const { isOpen } = React.useContext(CollapsibleContext);

  if (!isOpen) {
    return null;
  }

  return <div className="collapsible-content">{children}</div>;
};

const CollapsibleTrigger: React.FC<SSRSafeCollapsibleTriggerProps> = ({ children, onClick }) => {
  const { isOpen, onOpenChange } = React.useContext(CollapsibleContext);

  const handleClick = () => {
    onOpenChange(!isOpen);
    onClick?.();
  };

  return (
    <button type="button" onClick={handleClick} className="collapsible-trigger">
      {children}
    </button>
  );
};

SSRSafeCollapsible.Content = CollapsibleContent;
SSRSafeCollapsible.Trigger = CollapsibleTrigger;

export default SSRSafeCollapsible;