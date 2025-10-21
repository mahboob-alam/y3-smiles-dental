#!/bin/bash

# List of treatment files to update
files=(
  "src/pages/treatments/wisdom-teeth.tsx"
  "src/pages/treatments/tmd-bruxism.tsx"
  "src/pages/treatments/childrens-dentistry.tsx"
  "src/pages/treatments/dentures.tsx"
  "src/pages/treatments/emergency.tsx"
  "src/pages/treatments/examination-hygiene.tsx"
  "src/pages/treatments/extraction.tsx"
  "src/pages/treatments/sealants.tsx"
  "src/pages/treatments/root-canal.tsx"
  "src/pages/treatments/fluoride.tsx"
)

for file in "${files[@]}"; do
  echo "Updating $file..."
  
  # Add useState and Chevron icons to imports
  sed -i.bak "s/import React from 'react';/import React, { useState } from 'react';/" "$file"
  
  # Add ChevronDown and ChevronUp to lucide-react imports if not already there
  if ! grep -q "ChevronDown" "$file"; then
    sed -i.bak 's/} from "lucide-react";/, ChevronDown, ChevronUp} from "lucide-react";/' "$file"
  fi
  
  echo "✓ Updated imports in $file"
done

echo "Done! Please manually add the expand/collapse button and state in each component."
