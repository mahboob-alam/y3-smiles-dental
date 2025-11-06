#!/bin/bash

# Script to download and place professional images from Google Drive
# Visit: https://drive.google.com/drive/folders/1DxJC1ixTSaTR6nMqyisdUM734bZTO-l8
# Download all files and save to ~/Downloads, then run this script

echo "Moving professional images to static directory..."

cd /home/mahboob/Dev/y3-dental

# Treatment images
mv ~/Downloads/"Comprehensive check-ups and hygiene.jpg" ./static/comprehensive-checkups-hygiene.jpg 2>/dev/null || echo "comprehensive-checkups-hygiene.jpg not found"
mv ~/Downloads/"Crown and Bridge.jpg" ./static/crown-and-bridge.jpg 2>/dev/null || echo "crown-and-bridge.jpg not found"
mv ~/Downloads/"Custom Mouthguards.jpg" ./static/custom-mouthguards.jpg 2>/dev/null || echo "custom-mouthguards.jpg not found"
mv ~/Downloads/"Dental fillings.jpg" ./static/dental-fillings.jpg 2>/dev/null || echo "dental-fillings.jpg not found"
mv ~/Downloads/"Dental Implants.jpg" ./static/dental-implants.jpg 2>/dev/null || echo "dental-implants.jpg not found"
mv ~/Downloads/"Dentures.jpg" ./static/dentures.jpg 2>/dev/null || echo "dentures.jpg not found"
mv ~/Downloads/"Emergency dentistry.jpg" ./static/emergency-dentistry.jpg 2>/dev/null || echo "emergency-dentistry.jpg not found"
mv ~/Downloads/"Initial consultation.jpg" ./static/initial-consultation.jpg 2>/dev/null || echo "initial-consultation.jpg not found"
mv ~/Downloads/"Kids Dentistry.jpg" ./static/kids-dentistry.jpg 2>/dev/null || echo "kids-dentistry.jpg not found"
mv ~/Downloads/"Ongoing Care.jpg" ./static/ongoing-care.jpg 2>/dev/null || echo "ongoing-care.jpg not found"
mv ~/Downloads/"Periodontal Therapy.jpg" ./static/periodontal-therapy.jpg 2>/dev/null || echo "periodontal-therapy.jpg not found"
mv ~/Downloads/"Pits & Fissure Sealants.jpg" ./static/pits-fissure-sealants.jpg 2>/dev/null || echo "pits-fissure-sealants.jpg not found"
mv ~/Downloads/"Professional Treatment.jpg" ./static/professional-treatment.jpg 2>/dev/null || echo "professional-treatment.jpg not found"
mv ~/Downloads/"Root Canal Therapy.jpg" ./static/root-canal-therapy.jpg 2>/dev/null || echo "root-canal-therapy.jpg not found"
mv ~/Downloads/"Sedation Dentistry.jpg" ./static/sedation-dentistry.jpg 2>/dev/null || echo "sedation-dentistry.jpg not found"
mv ~/Downloads/"Teeth Whitening.jpg" ./static/teeth-whitening.jpg 2>/dev/null || echo "teeth-whitening.jpg not found"
mv ~/Downloads/"Treatment Planning.jpg" ./static/treatment-planning.jpg 2>/dev/null || echo "treatment-planning.jpg not found"

# Other images
mv ~/Downloads/"Afterpay.jpg" ./static/afterpay.jpg 2>/dev/null || echo "afterpay.jpg not found"
mv ~/Downloads/"Hero Video.mov" ./static/hero-video.mov 2>/dev/null || echo "hero-video.mov not found"

echo "Image replacement complete!"
echo "Run 'npm run develop' to test the changes."