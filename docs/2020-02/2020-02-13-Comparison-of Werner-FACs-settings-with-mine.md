---
title: "Comparison between Wener setting in FAcs with mine"
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
---

# Title : Comparison between the fAcs settings used for Werner in 2017 with the ones I am using currently.

## Date
13022020-14022020

## Objective
To understand what happen to the output fluorescence signal if the settings are slightly changed, and perhaps we can understand why in 2017 when he measured with Marit they measured 6-7 fold between 0-2% gal while I am only measuring 1.5-2.5 fold change, when taking the geometric means of the histograms.

![Marit-Werner data 2017](../images/Normalized-024-hist-fold-change-Werner_marit-2017.png){#fig:marit-data width=50%}

![Leila Data 06022020](../images/Normalized-024-hist-fold-change-leila-2020.png){#fig:leila-data width=50%}

- From @fig:marit-data we can observe that already the sugar source it was used is different than mine experiments. The used glucose as a second sugar source for the galactose promoter , and all the reamining controls are in incbated in glucose. The cells here were incubated in 30C and I incubated them in 36C (as Ilse measured in the bulk growth).  I used raffinose as a second sugar source , and also for the controls without galactose promoter, as Ilse used in her bulk growth experiments.
- From the histograms, we can see that @fig:marit-data have a long tail for 2% gal (gray curve), going until 25000.
- The 2% Raff in my case(@fig:leila-data) is more spread than the 2% glu for @fig:marit-data. maybe because Raffinose has some galactose???
- Looking from peak to peak in @fig:leila-data, we can see that the fold change is around 8, from 1000 to 8000.

## Method

- I am going to use only the following strains:
  - ywkd024 : RWS119	Wedlich-Söldner Lab collection	a	W303 *can 1 1-100		his3 11,15	Galpr-myc-**GFP**-CDC42	YipLac204-MET-CLN2	cln1$\Delta$::HisG, cln2$\Delta$, cln3$\Delta$::HisG*	(**strain to compare with ywkd065(sfGFP)**)
  - ywkd038: RWS1421	Wedlich-Söldner Lab collection	a	W303	*can1 1-100		his3 11,15	CDC42pr-myc-**GFP**-CDC42		YipLac204-MET-CLN2	cln1$\Delta$::HisG, cln2$\Delta$, cln3$\Delta$::HisG*	 (**Reference for the native CDC42 expression**)
  - ywkd001: 	$\alpha$	W303 *can 1 1-100		his3 11,15	leu2 3,112*		S288C ,yLL3a -Laan Lab collection (**Reference for the background fluorescence**)
- The incubation is going to be for 15 hours from glycerol stock to the measurement point, in 0% and 2% Gal.
    - Incubation started at 8:50 am on 13022020

### Different setting used for Werner (2017) and for me (2020)

- **Equipment-Model**: BDFACSCelesta
- **Lasers-488nm**: 375V (Werner) // 495V (Leila)
- **FSC threshold**: 50000 (Werner) // 20000 (Leila)
- **FSC voltage**: 375V (Werner) // 407V (Leila)
- **SSC volatge**: 233V (Werner) // 275V (Leila)

## Results

### Doublet correction
 From [this website](https://expert.cheekyscientist.com/how-to-perform-doublet-discrimination-in-flow-cytometry/)

> Notice the differences between the doublet pulse and
the single particle pulse: **both the area and the width of
the doublet pulse are larger than the single cell’s
(because two cells spend longer passing through a laser
beam than one cell) but the heights of the two pulses
are very close, if not identical.** We can take advantage of
these observations to parse out which pulses belong to
doublets and which belong to true single events in the
data set.
>
The magnitude of difference in any pulse parameter
between a doublet and single event is not large, and
**the resolution of linear scale is necessary to be able to
accurately identify doublets to exclude.** This
requirement precludes most fluorescent parameters,
which are typically scaled logarithmically, leaving
forward and side scatter (which are coincidentally also
nice and bright signals) as the best choices.

> One important tip: **if you are using BD “digital” FACSDiva instrumentation, the pulse width parameter is not really measured, but is calculated from the pulse area. Therefore, in order to ensure an accurate doublet exclusion gate, be sure to calibrate the Area Scaling Factor associated with the doublet discrimination parameter if you intend to use the width pulse parameter for doublet exclusion.**

So, what we shuld plot is FSC-H vs FSC-A and the same for SSC-H vs SSC-A. In our case this corresponds to:

![Strain ywkd024, the red color indicates the gate, that fall inside the diagonal, to ensure single cells](../images/024-doublet-correction-14022020.png){#fig:024-doublet width=80%}


![Strain ywkd038,the red color indicates the gate, that fall inside the diagonal, to ensure single cells](../images/038-doublet-correction-same-gate-of-024-14022020.png){#fig:038-doublet width=80%}

![Strain ywkd001,the red color indicates the gate, that fall inside the diagonal, to ensure single cells](../images/001-doublet-correction-same-gate-of-024-14022020.png){#fig:001-doublet width=80%}

### Histograms
![Non normalized non gated data histograms](../images/Non-normalized-hist-non-gated-data-14022020.png){#fig:hist width=80%}

![Non normalized  gated data histograms](../images/Non-normalized-hist-gated-data-14022020.png){#fig:hist-gated width=80%}

### Beads profile
![Beads profile](../images/Normalized-beads-profile-14022020.png){#fig:beads-profile width=80%}

### Fold change after autofluorescence removal with/without doublet correction

![Gated data after the doublet correction considering Leila settings to normalize](../images/Ratio-mean-gated-data-doublet-correction-leila-settings-14022020.png){#fig:mean-gated-leila width=50%}

![Non gated data  considering Leila settings to normalize](../images/Ratio-mean-non-gated-data-doublet-correction-leila-settings-14022020.png){#fig:mean-leila width=50%}

![Gated data after the doublet correction considering Werner settings to normalize](../images/Ratio-mean-gated-data-doublet-correction-werner-settings-14022020.png){#fig:mean-gated-werner width=50%}

![Non Gated data  considering Werner settings to normalize](../images/Ratio-mean-non-gated-data-doublet-correction-werner-settings-14022020.png){#fig:mean-werner width=50%}

## Conclusion

- The settings of Werner , what does is to shift the signal to the left including the signal from the beads.
- After the analysis of the height and the area output from the GFP output pulse , we can say that we can see 7 fold variation among the means of intensities when taking the height measure as the intensity signal.
- The doublet correction could help us to more accurately estimate the expression from single cells.
  - To avoid clumps of cells we should keep th edensity low and sonicate the cells!!
- Still there are some unclear points:
  - In order to take into account the height as the most informative parameter for the fluorescence of each cell, we should be able to see the 3 peaks of the calibration beads in the height channel!! Which we dont see with these settings, only in the area channel is where we see the three peaks.
  - However, still the height channel looks more promesing than the area channel because the shape of the distributions look more log-normal distributed ,as we expect for genetic expression distributions.
