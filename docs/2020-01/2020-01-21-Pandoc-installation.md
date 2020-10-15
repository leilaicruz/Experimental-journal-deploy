---
title: "How to set up atom/VSCode + pandoc "
output: pdf_document
documentclass: article
classoption: onecolumn
pdf_document:
latex_engine: pdflatex
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


## Objective

- To be able to set up a working pandoc together with .md documents written in Atom or VSCode.

## Method

- Install [Pandoc-here](https://pandoc.org/installing.html)
- Install [Pandoc-cross-ref](https://github.com/lierdakil/pandoc-crossref/releases/tag/v0.3.6.1b)
- Install [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/?id=installation) to either VSCode or Atom editors.
- I use as editor [Atom](https://atom.io/) :) 
  - In the configuration file set:
      - **Pandoc options: path** : where you have installed the executable file in your PC
      -  **Pandoc options: Commandline arguments** : *-s, --mathjax,--filter=pandoc-crossref.exe,--filter=pandoc-citeproc.exe *
      -  **Pandoc options: Markdown flavor**:

        markdown-raw_tex+tex_math_single_backslash+raw_tex+tex_math_dollars
         +citations+emoji

  - Now, we have to configure the pdf file we want to produce. This is done using a yaml fromt matter on top of your markdown document. This is one example :

      title: "How to set up atom/VSCode + pandoc "

      output: pdf_document

      documentclass: article

      classoption: onecolumn

      pdf_document:

      latex_engine: pdflatex

      numberSections: true

      fontsize: 12pt

      geometry: margin=0.5in

      cref: true

      crossref: true

      colorlinks: true

-  The yaml front matter is basically a set of instructions on top of the markdown document enclosed by this symbol: - - -
- That's it! Once you have your markdown document previewed using the **Markdown Preview Enhanced**, right click and select **Pandoc** and you will have your beatifully customized pdf document.
