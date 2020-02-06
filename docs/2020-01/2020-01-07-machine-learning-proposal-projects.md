---
title: "Machine learning projects"
output: pdf_document
documentclass: article
classoption: twocolumn
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
---


## Machine learning projects proposal for MsC/BsC/internships

### Project 1:

Living systems have the remarkable feature that they are evolvable: that is, they are capable of adjusting their properties such that their survival under certain conditions is improved. At the molecular level, these properties emerge from interactions between protein-substrate and protein-protein interactions. The basis for the interactions that occur in a cell, and thereby the properties that a cell has, lies in the genome: genes encode which proteins are present and which activities they can and cannot perform. Thus, each gene can be considered as a node in a large interaction network that directly or indirectly interacts with several other nodes of the network. Interestingly, this interaction network has the ability to compensate for the loss of nodes only by rewiring existing connections without the need to gain new nodes.
A previously studied evolutionary trajectory shows a reproducible set of mutations bringing a crippled yeast cell to a complete functional cell. The functional damage caused by the  initial mutation was restored by the deletion of three more genes, shown in an experimental evolution study. Moreover, if we genetically engineer a strain with all these mutations we see the same recovery, without the need, though, of the experimental evolution. Taking a closer look to the functional role of the rest of the genes that restore the functional state of the cell, we see that most of them are closely functionally related .

#### Research questions:
 - Is there a hidden/unknown logic of re-connections in order to maintain the initial architecture of the network?
 - Is there a way to propose based on which gene interacts with which, how the organism can recover  from an initial damage to  its initial wild type phenotype through genetic mutations?, in other words: How can we predict recovery trajectories upon an initial deleterious mutation, based on the genetic interaction network of the organism?
 - How to build potential functional networks associated with unknown proteins?

#### Goal:
 Our goal is:

 - to use machine learning to see if we can find patterns in experimental datasets that will allow us to predict which network components are the most likely to compensate for the loss of a node.

 - Identifying patterns of genome-wide reorganizations after network perturbations in S. cerevisiae

#### How could machine-learning help in answering those questions(s)?

Developing machine learning methods to tackle our questions will be very powerful. Our vision is to use the previously known recovery trajectory to try to learn about other possible recovery genetic routes that match with function, regulatory role, ontology, etc and generate other trajectories that can be also potentially tested in the lab.

#### Data

- One type of data is an excel table that contains curated data of annotated physical and genetic interactions  in S. cerevisiae, from SGD database. [Link](https://downloads.yeastgenome.org/curation/literature/interaction_data.tab)

- Raw genetic interaction datasets: [Pair-wise interaction and matrix format data ](http://thecellmap.org/costanzo2016/)

- [Genetic profile similarity matrices](http://thecellmap.org/costanzo2016/)

## Project 2:

### Training on analysing previous SATAY data

On the other hand, we would like to use the output of SATAY experiment in a meaningful way. There is already experience with that using rapamycin resistant mutants, where was found that Pib2 was a master regulator of TORC1. [1]

### Research questions

- Can we benefit from machine learning methods, to incorporate this knowledge in future experiments, in order to, for example, predict positive or negative interactors, to a specific gene , in a specific background?
- And yet, how essential genes data , can inform us about the scale/properties of network rewiring following gene loss?

[1]- Michel, A. H., Hatakeyama, R., Kimmig, P., Arter, M., Peter, M., Matos, J., ... & Kornmann, B. (2017). Functional mapping of yeast genomes by saturated transposition. Elife, 6, e23570.
