---
title: "FAcs-experiment-7"
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

# Title : 20200227-FACs experiment with strains ywkd065, ywkd024, ywkd038 and ywkd001


## Date

27022020

## Objective

- To measure using the **height** channel the fluorescence intensities (to understand why the heights and not the area,  look [here](2020-02-21-hands-on-data-from-facs.md)) in different galactose concentrations of the strains:
  - ywkd024, ywkd038,ywkd001,ywkd065
  - ywkd024 : RWS119	Wedlich-Söldner Lab collection	a	W303 *can 1 1-100		his3 11,15	Galpr-myc-**GFP**-CDC42	YipLac204-MET-CLN2	cln1$\Delta$::HisG, cln2$\Delta$, cln3$\Delta$::HisG*	(**strain to compare with ywkd065(sfGFP)**)
  - ywkd038: RWS1421	Wedlich-Söldner Lab collection	a	W303	*can1 1-100		his3 11,15	CDC42pr-myc-**GFP**-CDC42		YipLac204-MET-CLN2	cln1$\Delta$::HisG, cln2$\Delta$, cln3$\Delta$::HisG*	 (**Reference for the native CDC42 expression**)
  - ywkd001: 	$\alpha$	W303 *can 1 1-100		his3 11,15	leu2 3,112*		S288C ,yLL3a -Laan Lab collection (**Reference for the background fluorescence**)
  - ywkd065a	New	YWKD055c		W303		*URA-Gal1pr-**sfGFP**-Cdc42 sandwich (pWKD011 integrated)	leu2 3,112	his 3 11,15*

## Method
- Plate design :

  ![](../images/96-well-plate-design_design-27022020.png){width=50%}

- In this FACS I will use a slightly different method concerning the temperature incubation and the rotation of  the samples. Now we have the following issue:
  - Cells in 36C oven are not rotating , only shaking,  hence they sediment over time. This is not ideal because we dont have a proper mixing of nutrients.
- So , to avoid this, I will incubate them in 30C in the rotating wheel for  all the steps and only the last day , I will put them in 36C , for about 5h with a periodically vortex event, every 30 mins (Liedewij suggestion) . The cells were transferred on 25022020 to 30C about 5 hours later of being incubated in 36C.
- 26022020 : Results of 1st incubation at 9:00am:
  - ywkd065 and ywkd001 had nice density to have a good pellet of cells to distribute over the galactose concentrations.
  - ywkd024 and ywkd038 were all transparent :( Extremely low density of cells. (?)
- 2nd incubation for ywkd065 and ywkd001 at 10:25 am.
  - I inoculated 5ul of a resuspended culture in 2ml in all the tubes with CSM+x%gal+2% Raff.
  - **Important note**:

    > I realised later in the afternoon I did a mistake with the media with x% galactose concentrations. I put 1ml of the 10x concentrated sugar in 4.5ml of the CSM media with 2% raffinose. This means I put the doouble of sugar I usually put , and instead of diluting the 10X concentrated sugar 10 times  I did 5,5 times (5,5ml/1ml). **Hence all my galactose concentrations are going to be multiplied by a factor 0f 1.8 , that is , I will have: 0.018%, 0.036%, 0.108%, 0.144%,0.18%,0.36%,3.6%.**
  - **How did I realised this mistake?** (equally important)
    - I observed that when I was going to the same for the other strains in the afternoon, the 1mL pipette was by default set in 1mL and the last thing I did was the previous step, so if  I did correctly it should have 500ul as default .
    - Then I checked the volume for the tubes , because for the x% gal tubes they should have the same volume  as the 0% gal tube (5ml), but they had larger volume confirming the hypothesis that I inoculated 1ml of the 10x concentrated sugar for a final volume of 5.5ml.
- 2nd incubation for ywkd024 and ywkd038
  - I inoculated 10ul of a resuspended culture in 1ml of ywkd038 (it had a bit more density than ywkd024)
  - I inoculated 100ul of a resuspended culture in 1ml of ywkd024 in all the tubes.
  - I continue with the  same "mistake" of the galactose concentrations to be able to compare later on the results.
- There is one thing very worrysome to me , and it is the fact ywkd024 and ywkd038 grow so slowly with the combination of raffinose and galactose.
  - [X] I will make CSM-met+ agar plates with 2% Raff + 2% Galactose and 2% Glucose + 2% galactose , and do a restreak onto these plate and incubated in 30C and 36 C to see the differences .

- 27022020 : Day of measuring
  - I transfer them to 36C shaker at 9:00am and vortex two times before plating to measure at 12:30.
  - ywkd065 and ywkd001 were dense in almost all galactose concentrations. I diluted the dense ones 20X.
  - ywkd024 and ywkd038 were transparent. In the FACs, indeed I had very low counts mainly for ywkd024.

## Results
![Stadistics of the 96-well plate](../images/Stadistics-plate_27022020.png)

![Total counts of cells](../images/Counts-plate_27022020.png){#fig:counts}

![Boxplots of the raw data](../images/Boxplots_raw_data_exp_007.png){#fig:boxplots}

![Normalized histogram for the heights of ywkd065](../images/Normalized-065-hist-fold-change-27022020.png){#fig:065-hist width=50%}

![Normalized histogram for the heights of ywkd024](../images/Normalized-024-hist-fold-change-27022020.png){#fig:024-hist width=50%}

![Relative geometric mean to ywkd038 pointwise](../images/relative-geomean-shaded-error-27022020.png){#fig:geomean-relative width=50%}


## Next steps

- Since the counts of strains ywkd038 and ywkd024 were very poor I decided to check if the temperature and/or sugar source have an impact on the phenotype of those strains. See figure below:

![Phenotype comparison of ywkd24 and ywkd038 varying temperature and sugar source. 24 hours after plating](../images/plating-pictures_24-h-plating.png){#fig:phenotype-checking-24 width=50%}

![Phenotype comparison of ywkd24 and ywkd038 varying temperature and sugar source. 108 hours after plating](../images/plating-pictures_108-h-plating.png){#fig:phenotype-checking-108 width=50%}

  - We can observe that indeed incubation in 36C and using Raffinose as sugar source is detrimental for the normal growth of the cells.
  - We can see that the growth in Raffinose at 30C is OK.
  - It seems that for glucose the effect is the opposite. For T=36C the growth seems better than for 30C.

## Conclusion

-  In 0% gal , the fluorescence the wild type show is the left over after 24 hours in this concentration. Which can be used to estimate the amount of cdc42 we see in the microscopy experiments. So in this case will be that in 0% gal, the wt has around 0.21x the native amount and dbem1 was almost dead and also dbem1dbem3.
-  Table with values:

| Gal concentration | [cdc42-gal]/[mean-ref]|
|-------------------|----------------------|
| 0% Gal            | 0.215743             |
| 0.018% Gal         | 1.124315             |
| 0.036% Gal         | 1.105623             |
| 0.108% Gal         | 1.073516             |
| 0.144% Gal         | 1.827492             |
| 0.18% Gal          | 3.220484             |
| 0.36% Gal          | 1.908644             |
| 3.6% Gal            | 2.149941             |
