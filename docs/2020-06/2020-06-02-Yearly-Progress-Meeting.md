---
title: "Yearly Progress Meeting"
output: pdf_document
documentclass: article
classoption: onecolumn
pdf_document:
latex_engine: pdflatex
toc: true
lof: true
numberSections: true
highlight: tango
sectionsDepth: 3
chapters: True
figPrefix:
  - "Fig."
  - "Figs."
secPrefix:
  - "Section"
  - "Sections"
fontsize: 12pt
geometry: margin=1in
autoEqnLabels: true
cref: true
crossref: true
colorlinks: true
---


# Title: Yearly Progress Meeting (Starting my 3rd PhD year)

## Date
02062020

## Objective

- To reflect on agreements from the Go-No GO meeting in 2019, whether they have been followed or changed and why. 
- Make a plan for coming years. 

## Method
- One to one meeting with my supervisor 


## Next Steps

- [ ] Convert all my code slowly to the format of the Jupyter Book in order to have a better visualization and story telling of the code. 
- [ ] Connect always data (DOI in a data repo like 4TU) in the code (in python, refers to a link in 4TU maybe to download the files) and story line using jupyter notebooks. This is a structure to foster reproducibility of the data analysis. 
- [ ] For the reproducibility of experiments keep using this Experimental Journal :) 

### Code Related

- [ ] Do more testing on the ML workflow that from protein domains is capable of predicting synthetic lethality  in yeast. Specifically find :
    - The most important features (protein domains that are specific to SL)
    - Change the negative dataset (nonSL), make it bigger or change it, to test the specificity of the model. 

- [ ] Use this idea of features using protein domains to try to predict Bem1 rescue partners .

- [ ] Clean the code for the common Go-terms and common interactors partners , by excluding non informative Go-terms , that do not express nothing. 
```python
# remove the meaningless GO terms
    bad_GO = ['cellular_component','biological_process', 'molecular_function', 'not_yet_annotated','other']  
```  
