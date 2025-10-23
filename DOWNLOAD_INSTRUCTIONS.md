# Image Download and Replacement Instructions

## Step 1: Download Files from Google Drive

Visit: https://drive.google.com/drive/folders/1DxJC1ixTSaTR6nMqyisdUM734bZTO-l8

Download all files and save them to your Downloads folder or Desktop.

## Step 2: Move Files to Public Directory

Run these commands in your terminal:

```bash
cd /Users/mahboobalam/Dev/y3-dental/public

# Move Hero Video (rename from 'Hero Video.mov' to 'hero-video.mov')
mv ~/Downloads/"Hero Video.mov" ./hero-video.mov

# Move treatment images (rename to lowercase with hyphens)
mv ~/Downloads/"Comprehensive check-ups and hygiene.jpg" ./comprehensive-checkups-hygiene.jpg
mv ~/Downloads/"Crown and Bridge.jpg" ./crown-and-bridge.jpg
mv ~/Downloads/"Custom Mouthguards.jpg" ./custom-mouthguards.jpg
mv ~/Downloads/"Dental fillings.jpg" ./dental-fillings.jpg
mv ~/Downloads/"Dental Implants.jpg" ./dental-implants.jpg
mv ~/Downloads/"Dentures.jpg" ./dentures.jpg
mv ~/Downloads/"Emergency dentistry.jpg" ./emergency-dentistry.jpg
mv ~/Downloads/"Initial consultation.jpg" ./initial-consultation.jpg
mv ~/Downloads/"Kids Dentistry.jpg" ./kids-dentistry.jpg
mv ~/Downloads/"Ongoing Care.jpg" ./ongoing-care.jpg
mv ~/Downloads/"Periodontal Therapy.jpg" ./periodontal-therapy.jpg
mv ~/Downloads/"Pits & Fissure Sealants.jpg" ./pits-fissure-sealants.jpg
mv ~/Downloads/"Professional Treatment.jpg" ./professional-treatment.jpg
mv ~/Downloads/"Root Canal Therapy.jpg" ./root-canal-therapy.jpg
mv ~/Downloads/"Sedation Dentistry.jpg" ./sedation-dentistry.jpg
mv ~/Downloads/"Teeth Whitening.jpg" ./teeth-whitening.jpg
mv ~/Downloads/"Treatment Planning.jpg" ./treatment-planning.jpg
mv ~/Downloads/"Afterpay.jpg" ./afterpay.jpg
```

## Step 3: Run the Update Script

After moving the files, run:
```bash
npm run build
# or
gatsby build
```

## File Mapping

| Google Drive File | Local Filename | Used In |
|------------------|----------------|---------|
| Hero Video.mov | hero-video.mov | Homepage hero section |
| Comprehensive check-ups and hygiene.jpg | comprehensive-checkups-hygiene.jpg | Examination & Hygiene treatment page |
| Crown and Bridge.jpg | crown-and-bridge.jpg | Crown & Bridge treatment page |
| Custom Mouthguards.jpg | custom-mouthguards.jpg | Mouthguards treatment page |
| Dental fillings.jpg | dental-fillings.jpg | Dental Fillings treatment page |
| Dental Implants.jpg | dental-implants.jpg | Dental Implants treatment page |
| Dentures.jpg | dentures.jpg | Dentures treatment page |
| Emergency dentistry.jpg | emergency-dentistry.jpg | Emergency treatment page |
| Kids Dentistry.jpg | kids-dentistry.jpg | Children's Dentistry page |
| Periodontal Therapy.jpg | periodontal-therapy.jpg | Periodontal Therapy page |
| Pits & Fissure Sealants.jpg | pits-fissure-sealants.jpg | Sealants treatment page |
| Root Canal Therapy.jpg | root-canal-therapy.jpg | Root Canal treatment page |
| Sedation Dentistry.jpg | sedation-dentistry.jpg | Sedation Dentistry page |
| Teeth Whitening.jpg | teeth-whitening.jpg | Teeth Whitening page |
| Initial consultation.jpg | initial-consultation.jpg | First Visit / Patients pages |
| Treatment Planning.jpg | treatment-planning.jpg | Treatment pages |
| Professional Treatment.jpg | professional-treatment.jpg | Treatment pages |
| Ongoing Care.jpg | ongoing-care.jpg | Patients pages |
