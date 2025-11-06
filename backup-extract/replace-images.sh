#!/bin/bash

# Script to replace Pexels images with Google Drive images in treatment pages
# Run this after downloading and placing images in the public folder

cd /Users/mahboobalam/Dev/y3-dental

echo "Replacing treatment page hero images..."

# Sedation Dentistry
sed -i '' 's|https://images.pexels.com/photos/8260446/pexels-photo-8260446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/sedation-dentistry.jpg|g' src/pages/treatments/sedation-dentistry.tsx

# Dental Implants
sed -i '' 's|https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/dental-implants.jpg|g' src/pages/treatments/dental-implants.tsx

# Crown and Bridge
sed -i '' 's|https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/crown-and-bridge.jpg|g' src/pages/treatments/crown-bridge.tsx

# Mouthguards
sed -i '' 's|https://images.pexels.com/photos/6529121/pexels-photo-6529121.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/custom-mouthguards.jpg|g' src/pages/treatments/mouthguards.tsx

# Teeth Whitening
sed -i '' 's|https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/teeth-whitening.jpg|g' src/pages/treatments/teeth-whitening.tsx

# Children's Dentistry
sed -i '' 's|https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/kids-dentistry.jpg|g' src/pages/treatments/childrens-dentistry.tsx

# Emergency Dentistry
sed -i '' 's|https://images.pexels.com/photos/11999476/pexels-photo-11999476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/emergency-dentistry.jpg|g' src/pages/treatments/emergency.tsx

# Periodontal Therapy
sed -i '' 's|https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/periodontal-therapy.jpg|g' src/pages/treatments/periodontal.tsx

# Sealants
sed -i '' 's|https://images.pexels.com/photos/6812542/pexels-photo-6812542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop|/pits-fissure-sealants.jpg|g' src/pages/treatments/sealants.tsx

echo "Done! All treatment page images have been replaced."
echo "Now commit and push the changes:"
echo "git add ."
echo "git commit -m 'Replace Pexels images with Google Drive assets'"
echo "git push origin main"
