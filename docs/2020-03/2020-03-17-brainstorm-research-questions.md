---
title: "Brainstorming-research-questions"
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
geometry: margin=0.5in
autoEqnLabels: true
cref: true
crossref: true
colorlinks: true
---


# Context:
 Evolutionary trajectory that recovers a crippled phenotype towards a fully functional phenotype, by deleting (in a reproducible manner) other components of the network.

# Research questions:

1.  Would be possible  to predict this evolutionary trajectory, from existing knowledge?
    - Approach:
      - Using machine learning algorithms on existing publicly available datasets on budding yeast (fitness datasets, genetic /physical interactions, GO-terms) to decipher hidden patterns  and relationships in the data that may explain this evolutionary trajectory, combined  with biophysical modelling
    - State of the art:  There is already some work on models to predict evolution based on biophysical knowledge, look [here](https://elifesciences.org/articles/38822)

2.  What happens to the yeast interaction network in every step of the evolutionary trajectory ?
    - Approach :
      - Measure the essential genes and non essential genes beneficial for fitness for every step of the trajectory.
      - Translate the set of essential genes to the potential corresponding gene interaction network (computational approach)

3. What are the molecular mechanisms that lead to the adaptive changes for this trajectory?

      - Approach :
        -  Computational approaches (network analysis ) feed with experimental data about essentiality/GO terms to decipher potential molecular mechanisms behind this trajectory , that can be used for further testing.

4.  What can we learn from this trajectory that can we extend to others examples? (potential applications)
