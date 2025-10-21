import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Simple, SSR-friendly accordion implementation with local state
// API: <Accordion>
//        <AccordionItem value="id">
//          <AccordionTrigger>Title</AccordionTrigger>
//          <AccordionContent>Content</AccordionContent>
//        </AccordionItem>
//      </Accordion>

type AccordionContextType = {
  type: "single" | "multiple"
  value: string[]
  toggle: (val: string) => void
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, type = "single", defaultValue }, ref) => {
    const initial = React.useMemo(() => {
      if (type === "multiple") return Array.isArray(defaultValue) ? defaultValue : []
      return typeof defaultValue === "string" ? [defaultValue] : []
    }, [defaultValue, type])

    const [value, setValue] = React.useState<string[]>(initial)

    const toggle = (val: string) => {
      setValue((prev) => {
        const isOpen = prev.includes(val)
        if (type === "multiple") {
          return isOpen ? prev.filter((v) => v !== val) : [...prev, val]
        }
        return isOpen ? [] : [val]
      })
    }

    const ctx = React.useMemo<AccordionContextType>(
      () => ({ type, value, toggle }),
      [type, value]
    )

    return (
      <div ref={ref} className={className}>
        <AccordionContext.Provider value={ctx}>{children}</AccordionContext.Provider>
      </div>
    )
  }
)
Accordion.displayName = "Accordion"

// Context to pass itemValue from AccordionItem to Trigger/Content
const AccordionItemContext = React.createContext<string>("")

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, value: itemValue = "item" }, ref) => {
    return (
      <AccordionItemContext.Provider value={itemValue}>
        <div ref={ref} className={cn("border-b", className)} data-accordion-item={itemValue}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext)
    const itemValue = React.useContext(AccordionItemContext)
    const open = !!ctx?.value.includes(itemValue)

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => ctx?.toggle(itemValue)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
          open && "[&>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext)
    const itemValue = React.useContext(AccordionItemContext)
    const open = !!ctx?.value.includes(itemValue)

    return (
      <div
        ref={ref}
        hidden={!open}
        className={cn(
          "overflow-hidden text-sm transition-all",
          open ? "animate-accordion-down" : "animate-accordion-up",
          className
        )}
        {...props}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
