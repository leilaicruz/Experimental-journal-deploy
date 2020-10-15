---
title: "Interactors of essential vs non essential genes"
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
# Title : How different are the number of interactors of essential genes compared with non essential genes. 

## Date
22062020

## Objective

To see if the number of interactors of essential genes , registered from the database of the Boone Lab , are indeed higher than non essential genes. 
 This is to evaluate the hypothesis that essential genes are prone to be higher connected than non essential genes. 

## Method
- Taking the data from thecellmap.org from Boone Lab and the list of essential genes in budding yeast, and plotting a histogram of the number of interactors per condition.

## Results

![](../images/22062020-essential-and-not-essential-genes-number-of-interactors.png)

![](../images/22062020-essential-and-not-essential-genes-number-of-interactors-boxplot.png)

## Conclusion

- It seems that for essential genes the probability that those genes are more connected than non essentials is a bit higher. 
- There are few genes largely connected that could be essential and non essential (see the tail of the box plot)