
## 16-07-2019-Script in python to find the most connected genes to a query gene. :milky_way: 

### Goal
From the physical and genetic interactors of a specific gene, I am interested in finding which of the interactors of the interactors are also interactors of the initial query gene.

The following picture may explain this:
![](../images/cartoon-for-common-genes-workflow07.png)

## Python code

```python
import pandas as pd
import numpy as np
from collections import defaultdict
import seaborn as sns
import matplotlib.pyplot as plt
%matplotlib inline


## good website to study dataframes
#https://www.shanelynn.ie/using-pandas-dataframe-creating-editing-viewing-data-in-python/
```


```python
data=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\data_sgd\Interaction_data_sgd_downloads.xlsx',header=17,encoding="utf-8-sig")
col_label=data.columns.values
data_go=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\data_sgd\slim_goterms_data_sgd_downloads.xlsx',header=14,encoding="utf-8-sig")
col_label_go=data_go.columns.values
data_go.set_index(col_label_go[1],inplace=True)
```


```python



d2 = defaultdict(dict)
query=['BEM1']
# giant for loop
names1 = query
i=-1
for query1 in names1:
    #filtering the table just for the value of the query
    q1 = data[data['Standard_Gene_Name_(Bait)']==query1]
    q1_interact=q1[col_label[3]].unique()
   # a for loop for all the interactors of query
    for query2 in q1_interact:


        q2=data[data['Standard_Gene_Name_(Bait)']==query2] #these are get_query(q1[i])
        q2_interact=q2[col_label[3]].unique()
        d = defaultdict(int)
        common = []

        for name1  in q2_interact:
            if name1 in q1_interact: # if a gene interactor of the query1 is in interactors of query 2
                common.append(name1)
                d[name1] += 1


        d2[query1, query2]["common"] = common
        d2[query1,query2]["names of genes"]=query2
        d2[query1, query2]["n_common"] = len(common)
        d2[query1, query2]["len_i_1"] = len(q1)
        d2[query1, query2]["len_i_2"] = len(q2)
        if len(q1)==0:
            d2[query1, query2]["% of query subset"] = 0
        else:
            d2[query1, query2]["% of query subset"] = len(d)/len(q1_interact) *100

        if len(q2)==0:
            d2[query1, query2]["% of query 2 subset  "] = 0
        else:
            d2[query1, query2]["% of query 2 subset  "] = len(d)/len(q2_interact) *100

            q1_filt=q1[q1[col_label[3]]==query2]
            d2[query1,query2]["interact_annotation"]=q1_filt[col_label[4]]
            d2[query1,query2]['GO_slim_query']= data_go.loc[query1][col_label_go[4]]
            #d2[query1,query2]['GO_slim_interactors']= data_go[data_go[col_label_go[1]]==query2][col_label_go[4]]

            d2[query1,query2]['GO_slim_interactors']= data_go.loc[query2][col_label_go[4]]


```


```python
df=pd.DataFrame(d2).T
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>% of query 2 subset</th>
      <th>% of query subset</th>
      <th>GO_slim_interactors</th>
      <th>GO_slim_query</th>
      <th>common</th>
      <th>interact_annotation</th>
      <th>len_i_1</th>
      <th>len_i_2</th>
      <th>n_common</th>
      <th>names of genes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="61" valign="top">BEM1</th>
      <th>ATS1</th>
      <td>15.2542</td>
      <td>2.80374</td>
      <td>Gene (optional)
ATS1                    cytopl...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[RPS8A, BEM1, STE50, RVS161, SAC3, ROM2, TPM1,...</td>
      <td>4872    Negative Genetic
Name: Experiment_Type...</td>
      <td>415</td>
      <td>66</td>
      <td>9</td>
      <td>ATS1</td>
    </tr>
    <tr>
      <th>PMT2</th>
      <td>23.6364</td>
      <td>8.09969</td>
      <td>Gene (optional)
PMT2                          ...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[PEP1, ECM33, PMT1, RGP1, ERD1, GET2, GLO3, PM...</td>
      <td>5487    Negative Genetic
Name: Experiment_Type...</td>
      <td>415</td>
      <td>143</td>
      <td>26</td>
      <td>PMT2</td>
    </tr>
    <tr>
      <th>LTE1</th>
      <td>13.8264</td>
      <td>13.3956</td>
      <td>Gene (optional)
LTE1                          ...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[CDC24, SWD1, FUS3, UBP14, BEM1, MBP1, BRE1, S...</td>
      <td>5830    Negative Genetic
Name: Experiment_Type...</td>
      <td>415</td>
      <td>367</td>
      <td>43</td>
      <td>LTE1</td>
    </tr>
    <tr>
      <th>SNC1</th>
      <td>44</td>
      <td>3.42679</td>
      <td>Gene (optional)
SNC1             Golgi apparat...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[SEC17, SEC18, CYK3, ARF1, SWF1, VPS1, ELO3, S...</td>
      <td>7080    Affinity Capture-Western
Name: Experim...</td>
      <td>415</td>
      <td>50</td>
      <td>11</td>
      <td>SNC1</td>
    </tr>
    <tr>
      <th>CLN3</th>
      <td>35.7143</td>
      <td>7.78816</td>
      <td>Gene (optional)
CLN3                          ...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[STE50, MBP1, STE5, RPA14, MNN10, SSD1, IPK1, ...</td>
      <td>7971    Positive Genetic
Name: Experiment_Type...</td>
      <td>415</td>
      <td>106</td>
      <td>25</td>
      <td>CLN3</td>
    </tr>
    <tr>
      <th>CDC24</th>
      <td>27.4809</td>
      <td>11.215</td>
      <td>Gene (optional)
CDC24                         ...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[CDC24, BOI1, BEM1, RDI1, STE5, GIC2, RGA2, SA...</td>
      <td>8231         Synthetic Lethality
8232    Affin...</td>
      <td>415</td>
      <td>200</td>
      <td>36</td>
      <td>CDC24</td>
    </tr>
    <tr>
      <th>SWD1</th>
      <td>18.8811</td>
      <td>8.41121</td>
      <td>Gene (optional)
SWD1                          ...</td>
      <td>Gene (optional)
BEM1                    cellul...</td>
      <td>[RXT2, STE50, BRE1, RPA14, SAC3, MSN5, SEM1, V...</td>
      <td>10815    Positive Genetic
Name: Experiment_Typ...</td>
      <td>415</td>
      <td>200</td>
      <td>27</td>
      <td>SWD1</td>
    </tr>
    <tr>
      <th>BUD14</th>
      <td>26.7442</td>
      <td>7.16511</td>
      <td>Gene (optional)
      BUD14                         ...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[RXT2, RRP7, STE50, TPS2, MTH1, IPK1, SWI4, BE...</td>
            <td>11634    Positive Genetic
      Name: Experiment_Typ...</td>
            <td>415</td>
            <td>99</td>
            <td>23</td>
            <td>BUD14</td>
          </tr>
          <tr>
            <th>PDR3</th>
            <td>17.5</td>
            <td>2.18069</td>
            <td>Gene (optional)
      PDR3                          ...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[MNN10, SEM1, SWI4, BEM2, MNN11, OPI3, ELM1]</td>
            <td>13524    Two-hybrid
      Name: Experiment_Type_(Req...</td>
            <td>415</td>
            <td>41</td>
            <td>7</td>
            <td>PDR3</td>
          </tr>
          <tr>
            <th>FUS3</th>
            <td>23.4177</td>
            <td>11.5265</td>
            <td>Gene (optional)
      FUS3                          ...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[CLN3, BUD14, FUS3, BOI1, RXT2, BEM1, STE50, S...</td>
            <td>15220    Affinity Capture-Western
      Name: Experi...</td>
            <td>415</td>
            <td>249</td>
            <td>37</td>
            <td>FUS3</td>
          </tr>
          <tr>
            <th>PEP1</th>
            <td>15.7895</td>
            <td>1.86916</td>
            <td>Gene (optional)
      PEP1        Golgi apparatus
      PE...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[PEP1, PMR1, RIM101, RIC1, RIM21, VPS5]</td>
            <td>15656    Negative Genetic
      Name: Experiment_Typ...</td>
            <td>415</td>
            <td>45</td>
            <td>6</td>
            <td>PEP1</td>
          </tr>
          <tr>
            <th>SEC17</th>
            <td>23.7624</td>
            <td>7.47664</td>
            <td>Gene (optional)
      SEC17                    cytop...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[SEC18, SWF1, MSN5, GET2, VAM7, IST3, CNB1, YK...</td>
            <td>19834    Co-fractionation
      Name: Experiment_Typ...</td>
            <td>415</td>
            <td>114</td>
            <td>24</td>
            <td>SEC17</td>
          </tr>
          <tr>
            <th>SKT5</th>
            <td>33.6364</td>
            <td>11.5265</td>
            <td>Gene (optional)
      SKT5                          ...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[RPS8A, CHS3, ECM33, BEM1, STE50, RVS161, CYK3...</td>
            <td>20873    Negative Genetic
      Name: Experiment_Typ...</td>
            <td>415</td>
            <td>169</td>
            <td>37</td>
            <td>SKT5</td>
          </tr>
          <tr>
            <th>RPS8A</th>
            <td>0</td>
            <td>0</td>
            <td>Gene (optional)
      RPS8A                         ...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[]</td>
            <td>21501    Negative Genetic
      Name: Experiment_Typ...</td>
            <td>415</td>
            <td>5</td>
            <td>0</td>
            <td>RPS8A</td>
          </tr>
          <tr>
            <th>BOI1</th>
            <td>27.2727</td>
            <td>4.6729</td>
            <td>Gene (optional)
      BOI1                cellular b...</td>
            <td>Gene (optional)
      BEM1                    cellul...</td>
            <td>[EXO84, BEM1, RRP7, MTH1, SEC3, BOI2, BEM2, CD...</td>
            <td>22819       Negative Genetic
      22820    Affinity...</td>
            <td>415</td>
            <td>78</td>
            <td>15</td>
            <td>BOI1</td>
          </tr>
          <tr>
            <th>NTH2</th>
            <td>16.6667</td>
            <td>0.934579</td>
            <td>Gene (optional)
            NTH2                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, STE50, TPS2]</td>
                  <td>24979    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>20</td>
                  <td>3</td>
                  <td>NTH2</td>
                </tr>
                <tr>
                  <th>MNN2</th>
                  <td>36.6197</td>
                  <td>8.09969</td>
                  <td>Gene (optional)
            MNN2                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[PMT2, MNN2, VAM6, PMT1, ARF1, ERD1, GET2, SEC...</td>
                  <td>27420    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>82</td>
                  <td>26</td>
                  <td>MNN2</td>
                </tr>
                <tr>
                  <th>CHS3</th>
                  <td>30.9735</td>
                  <td>10.9034</td>
                  <td>Gene (optional)
            CHS3                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CDC24, SKT5, RPS8A, MNN2, CHS3, VAM6, ARF1, M...</td>
                  <td>27890    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>182</td>
                  <td>35</td>
                  <td>CHS3</td>
                </tr>
                <tr>
                  <th>RPS11B</th>
                  <td>7.69231</td>
                  <td>0.623053</td>
                  <td>Gene (optional)
            RPS11B                        ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, ARF1]</td>
                  <td>30303    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>26</td>
                  <td>2</td>
                  <td>RPS11B</td>
                </tr>
                <tr>
                  <th>UBP14</th>
                  <td>22.9885</td>
                  <td>6.23053</td>
                  <td>Gene (optional)
            UBP14                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CYC8, BEM1, STE50, RVS161, MNN10, LSM6, RVS16...</td>
                  <td>30960    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>92</td>
                  <td>20</td>
                  <td>UBP14</td>
                </tr>
                <tr>
                  <th>ECM33</th>
                  <td>30.5389</td>
                  <td>15.8879</td>
                  <td>Gene (optional)
            ECM33                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[PMT2, PEP1, SKT5, BEM1, STE50, MBP1, VAM6, PM...</td>
                  <td>32618    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>184</td>
                  <td>51</td>
                  <td>ECM33</td>
                </tr>
                <tr>
                  <th>SEC18</th>
                  <td>16.25</td>
                  <td>4.04984</td>
                  <td>Gene (optional)
            SEC18             Golgi appara...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[SEC18, SSD1, LAS21, PBS2, RPS21B, CNB1, YKT6,...</td>
                  <td>33169    Co-fractionation
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>85</td>
                  <td>13</td>
                  <td>SEC18</td>
                </tr>
                <tr>
                  <th>RXT2</th>
                  <td>24.1935</td>
                  <td>9.34579</td>
                  <td>Gene (optional)
            RXT2                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[LTE1, FUS3, STE50, RVS161, SAC3, SSD1, SEM1, ...</td>
                  <td>35601    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>174</td>
                  <td>30</td>
                  <td>RXT2</td>
                </tr>
                <tr>
                  <th>EXO84</th>
                  <td>37.931</td>
                  <td>3.42679</td>
                  <td>Gene (optional)
            EXO84                   cell c...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[EXO84, SEC5, SEC3, SEC4, SEC15, SEC6, EXO70, ...</td>
                  <td>36506    Co-purification
            Name: Experiment_Type...</td>
                  <td>415</td>
                  <td>56</td>
                  <td>11</td>
                  <td>EXO84</td>
                </tr>
                <tr>
                  <th>CYC8</th>
                  <td>11.2903</td>
                  <td>2.18069</td>
                  <td>Gene (optional)
            CYC8                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CYC8, SAC3, SKN7, SWI6, ROM2, YDJ1, SIN3]</td>
                  <td>38572    Two-hybrid
            Name: Experiment_Type_(Req...</td>
                  <td>415</td>
                  <td>78</td>
                  <td>7</td>
                  <td>CYC8</td>
                </tr>
                <tr>
                  <th>BEM1</th>
                  <td>100</td>
                  <td>100</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[ATS1, PMT2, LTE1, SNC1, CLN3, CDC24, SWD1, BU...</td>
                  <td>48372    PCA
            Name: Experiment_Type_(Required) ...</td>
                  <td>415</td>
                  <td>415</td>
                  <td>321</td>
                  <td>BEM1</td>
                </tr>
                <tr>
                  <th>LDB16</th>
                  <td>0</td>
                  <td>0</td>
                  <td>NaN</td>
                  <td>NaN</td>
                  <td>[]</td>
                  <td>NaN</td>
                  <td>415</td>
                  <td>0</td>
                  <td>0</td>
                  <td>LDB16</td>
                </tr>
                <tr>
                  <th>RRP7</th>
                  <td>4.16667</td>
                  <td>0.623053</td>
                  <td>Gene (optional)
            RRP7                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RPS27B, RIC1]</td>
                  <td>48377    Two-hybrid
            Name: Experiment_Type_(Req...</td>
                  <td>415</td>
                  <td>51</td>
                  <td>2</td>
                  <td>RRP7</td>
                </tr>
                <tr>
                  <th>STE50</th>
                  <td>12.3711</td>
                  <td>3.73832</td>
                  <td>Gene (optional)
            STE50                     cyto...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[STE50, VAM6, STE5, PSP1, PTP3, VAM7, KEL2, ST...</td>
                  <td>48378    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>127</td>
                  <td>12</td>
                  <td>STE50</td>
                </tr>
                <tr>
                  <th>RVS161</th>
                  <td>35.1724</td>
                  <td>15.8879</td>
                  <td>Gene (optional)
            RVS161                     cel...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CLN3, BUD14, SKT5, MNN2, CHS3, RXT2, BEM1, CY...</td>
                  <td>48381    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>262</td>
                  <td>51</td>
                  <td>RVS161</td>
                </tr>
                <tr>
                  <th>...</th>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <th>RPS10A</th>
                  <td>0</td>
                  <td>0</td>
                  <td>Gene (optional)
            RPS10A                        ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[]</td>
                  <td>49007    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>4</td>
                  <td>0</td>
                  <td>RPS10A</td>
                </tr>
                <tr>
                  <th>SNC2</th>
                  <td>43.5897</td>
                  <td>5.29595</td>
                  <td>Gene (optional)
            SNC2            Golgi apparatu...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[SNC1, SEC17, EXO84, SEC5, SEC3, SEC15, SEC6, ...</td>
                  <td>49010    Affinity Capture-Western
            Name: Experi...</td>
                  <td>415</td>
                  <td>59</td>
                  <td>17</td>
                  <td>SNC2</td>
                </tr>
                <tr>
                  <th>SVL3</th>
                  <td>20</td>
                  <td>3.73832</td>
                  <td>Gene (optional)
            SVL3                cellular b...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, RPS16B, OCA6, BEM2, MNN11, MOG1, SRL3, ...</td>
                  <td>49014    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>69</td>
                  <td>12</td>
                  <td>SVL3</td>
                </tr>
                <tr>
                  <th>MET31</th>
                  <td>20</td>
                  <td>0.934579</td>
                  <td>Gene (optional)
            MET31                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[STE50, RVS161, YDJ1]</td>
                  <td>49015    Two-hybrid
            Name: Experiment_Type_(Req...</td>
                  <td>415</td>
                  <td>20</td>
                  <td>3</td>
                  <td>MET31</td>
                </tr>
                <tr>
                  <th>VPS16</th>
                  <td>35</td>
                  <td>2.18069</td>
                  <td>Gene (optional)
            VPS16                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[VAM6, SEC4, VAM7, NYV1, VPS33, YPT7, VAM3]</td>
                  <td>49016    Co-fractionation
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>32</td>
                  <td>7</td>
                  <td>VPS16</td>
                </tr>
                <tr>
                  <th>SGF11</th>
                  <td>19.3103</td>
                  <td>8.72274</td>
                  <td>Gene (optional)
            SGF11                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[LTE1, RXT2, BEM1, STE50, BRE1, CYK3, SAC3, SE...</td>
                  <td>49017    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>252</td>
                  <td>28</td>
                  <td>SGF11</td>
                </tr>
                <tr>
                  <th>RPL21B</th>
                  <td>12</td>
                  <td>0.934579</td>
                  <td>Gene (optional)
            RPL21B                        ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, PAT1, GAS1]</td>
                  <td>49021    Positive Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>25</td>
                  <td>3</td>
                  <td>RPL21B</td>
                </tr>
                <tr>
                  <th>ELP3</th>
                  <td>21.608</td>
                  <td>13.3956</td>
                  <td>Gene (optional)
            ELP3                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[ATS1, RPS8A, RXT2, BEM1, RRP7, STE50, RVS161,...</td>
                  <td>49022    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>295</td>
                  <td>43</td>
                  <td>ELP3</td>
                </tr>
                <tr>
                  <th>ELP4</th>
                  <td>24.6032</td>
                  <td>9.65732</td>
                  <td>Gene (optional)
            ELP4                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, STE50, RVS161, BRE1, UBP1, GET2, SWI4, ...</td>
                  <td>49027    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>163</td>
                  <td>31</td>
                  <td>ELP4</td>
                </tr>
                <tr>
                  <th>BEM3</th>
                  <td>50</td>
                  <td>4.98442</td>
                  <td>Gene (optional)
            BEM3                  cell cor...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CDC24, BEM1, RVS161, RVS167, BEM2, SLT2, BCK1...</td>
                  <td>49028    Positive Genetic
            49029    Positive Ge...</td>
                  <td>415</td>
                  <td>40</td>
                  <td>16</td>
                  <td>BEM3</td>
                </tr>
                <tr>
                  <th>RNY1</th>
                  <td>25</td>
                  <td>1.55763</td>
                  <td>Gene (optional)
            RNY1                cytoplasm
            ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, SPT3, GIM4, RPS21B, ELP3]</td>
                  <td>49033    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>20</td>
                  <td>5</td>
                  <td>RNY1</td>
                </tr>
                <tr>
                  <th>KES1</th>
                  <td>27.5229</td>
                  <td>9.34579</td>
                  <td>Gene (optional)
            KES1            Golgi apparatu...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BUD14, BEM1, STE50, VAM6, ARF1, SAC3, SAC7, P...</td>
                  <td>49034    Negative Genetic
            49037    Negative Ge...</td>
                  <td>415</td>
                  <td>126</td>
                  <td>30</td>
                  <td>KES1</td>
                </tr>
                <tr>
                  <th>YPL150W</th>
                  <td>0</td>
                  <td>0</td>
                  <td>NaN</td>
                  <td>NaN</td>
                  <td>[]</td>
                  <td>NaN</td>
                  <td>415</td>
                  <td>0</td>
                  <td>0</td>
                  <td>YPL150W</td>
                </tr>
                <tr>
                  <th>RRD2</th>
                  <td>31.0345</td>
                  <td>2.80374</td>
                  <td>Gene (optional)
            RRD2                         o...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[SAC3, SSD1, GIM4, CDC55, SLT2, RTT101, PBS2, ...</td>
                  <td>49041    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>32</td>
                  <td>9</td>
                  <td>RRD2</td>
                </tr>
                <tr>
                  <th>BEM4</th>
                  <td>45</td>
                  <td>2.80374</td>
                  <td>Gene (optional)
            BEM4                    cytopl...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CDC24, BEM1, BEM2, KSS1, CDC42, STE11, ROM2, ...</td>
                  <td>49044    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>25</td>
                  <td>9</td>
                  <td>BEM4</td>
                </tr>
                <tr>
                  <th>SVS1</th>
                  <td>0</td>
                  <td>0</td>
                  <td>NaN</td>
                  <td>NaN</td>
                  <td>[]</td>
                  <td>NaN</td>
                  <td>415</td>
                  <td>0</td>
                  <td>0</td>
                  <td>SVS1</td>
                </tr>
                <tr>
                  <th>CBC2</th>
                  <td>8.13397</td>
                  <td>5.29595</td>
                  <td>Gene (optional)
            CBC2            nucleus
            CBC2  ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RPS8A, PAT1, BRE1, SAC3, SSD1, SLX9, IST3, MO...</td>
                  <td>49047    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>369</td>
                  <td>17</td>
                  <td>CBC2</td>
                </tr>
                <tr>
                  <th>PPQ1</th>
                  <td>6.25</td>
                  <td>0.311526</td>
                  <td>Gene (optional)
            PPQ1                    cytopl...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[ELP3]</td>
                  <td>49048    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>17</td>
                  <td>1</td>
                  <td>PPQ1</td>
                </tr>
                <tr>
                  <th>TCO89</th>
                  <td>20</td>
                  <td>7.16511</td>
                  <td>Gene (optional)
            TCO89                         ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RPS8A, VAM6, RDI1, RPA14, SSD1, PPM1, GET2, A...</td>
                  <td>49049    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>129</td>
                  <td>23</td>
                  <td>TCO89</td>
                </tr>
                <tr>
                  <th>SSO1</th>
                  <td>25</td>
                  <td>2.49221</td>
                  <td>Gene (optional)
            SSO1               cytoplasm
            S...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[SNC1, SEC17, ARF1, VAM7, YKT6, NYV1, SSO2, SNC2]</td>
                  <td>49051    Affinity Capture-Western
            Name: Experi...</td>
                  <td>415</td>
                  <td>61</td>
                  <td>8</td>
                  <td>SSO1</td>
                </tr>
                <tr>
                  <th>YAR1</th>
                  <td>19.2308</td>
                  <td>1.55763</td>
                  <td>Gene (optional)
            YAR1                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BEM1, ELP2, IKI3, ELP6, NST1]</td>
                  <td>49053    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>33</td>
                  <td>5</td>
                  <td>YAR1</td>
                </tr>
                <tr>
                  <th>CLN2</th>
                  <td>30.1724</td>
                  <td>10.9034</td>
                  <td>Gene (optional)
            CLN2                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[CLN3, SKT5, CHS3, BEM1, RVS161, PAT1, VAM6, C...</td>
                  <td>49056    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>177</td>
                  <td>35</td>
                  <td>CLN2</td>
                </tr>
                <tr>
                  <th>EAF3</th>
                  <td>11.7647</td>
                  <td>6.23053</td>
                  <td>Gene (optional)
            EAF3                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[BRE1, RVS167, SPT3, VPS72, GIM4, RIM101, APQ1...</td>
                  <td>49060    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>241</td>
                  <td>20</td>
                  <td>EAF3</td>
                </tr>
                <tr>
                  <th>SEC8</th>
                  <td>39.2857</td>
                  <td>3.42679</td>
                  <td>Gene (optional)
            SEC8                 cell cort...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[EXO84, SEC5, SEM1, RVS167, SEC3, SEC4, SEC15,...</td>
                  <td>49062             Co-purification
            49063    Aff...</td>
                  <td>415</td>
                  <td>80</td>
                  <td>11</td>
                  <td>SEC8</td>
                </tr>
                <tr>
                  <th>SPE3</th>
                  <td>0</td>
                  <td>0</td>
                  <td>Gene (optional)
            SPE3                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[]</td>
                  <td>49064    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>6</td>
                  <td>0</td>
                  <td>SPE3</td>
                </tr>
                <tr>
                  <th>NVJ2</th>
                  <td>0</td>
                  <td>0</td>
                  <td>Gene (optional)
            NVJ2                cytoplasm
            ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[]</td>
                  <td>49065    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>2</td>
                  <td>0</td>
                  <td>NVJ2</td>
                </tr>
                <tr>
                  <th>SYT1</th>
                  <td>26.3158</td>
                  <td>1.55763</td>
                  <td>Gene (optional)
            SYT1                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RGP1, RVS167, ISC1, RIC1, CDC42]</td>
                  <td>49066    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>20</td>
                  <td>5</td>
                  <td>SYT1</td>
                </tr>
                <tr>
                  <th>CLB5</th>
                  <td>10.2362</td>
                  <td>4.04984</td>
                  <td>Gene (optional)
            CLB5                          ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[PAT1, MSN5, VPS72, SWI4, CDC55, RIM101, SLT2,...</td>
                  <td>49067    Negative Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>196</td>
                  <td>13</td>
                  <td>CLB5</td>
                </tr>
                <tr>
                  <th>RHO1</th>
                  <td>20</td>
                  <td>3.42679</td>
                  <td>Gene (optional)
            RHO1                         G...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RDI1, SAC7, SEC3, SLT2, SKN7, ROM2, ZDS1, BNI...</td>
                  <td>49068    Co-fractionation
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>78</td>
                  <td>11</td>
                  <td>RHO1</td>
                </tr>
                <tr>
                  <th>SKI3</th>
                  <td>12.1951</td>
                  <td>3.11526</td>
                  <td>Gene (optional)
            SKI3                cytoplasm
            ...</td>
                  <td>Gene (optional)
            BEM1                    cellul...</td>
                  <td>[RPS8A, PAT1, SAC3, MNN10, RVS167, LSM1, RPL8B...</td>
                  <td>49069    Positive Genetic
            Name: Experiment_Typ...</td>
                  <td>415</td>
                  <td>104</td>
                  <td>10</td>
                  <td>SKI3</td>
                </tr>
              </tbody>
            </table>
            <p>321 rows × 10 columns</p>
      </div>





```python

# I dont want the query to be in the plot
df=pd.DataFrame(d2).T
a=df
a_col=a.columns.values
#0'% of query 2 subset  ',
#1'% of query subset',
#2'GO_slim_interactors'
#3'GO_slim_query'
#4'common',
#5'interact_annotation',
#6'len_i_1',
#7'len_i_2',
#8'n_common',
#9'names of genes'
ab=a['% of query subset'][::-1]
pos= np.arange(len(a.iloc[:,4]))
#making a data frame of both datasets for better handling them
#ab_df=pd.DataFrame({'% of query subset':ab,'names of genes':names2[::-1]})
#sorting the data by the values
absorted=a.sort_values(by=['% of query subset'])

genes_to_plot=absorted['names of genes'].iloc[len(a.iloc[:,4])-20:len(a.iloc[:,4])]
numbers_to_plot=absorted['% of query subset'].iloc[len(a.iloc[:,4])-20:len(a.iloc[:,4])]

fig, ax = plt.subplots(figsize=(10,10))         # Sample figsize in inches
plt.barh(pos[0:20],numbers_to_plot,align='edge',tick_label=genes_to_plot,color=(0.2, 0.4, 0.6, 0.6))

ax.tick_params(labelbottom='on',labeltop='on')
ax.grid(color='k', linestyle='-', linewidth=0.5)

ax.text(120,22,"Top_most_connected_gene",fontsize=17)
ax.text(120, 0,  data_go.loc[genes_to_plot[18]][col_label_go[4]], fontsize=15)
ax.text(120,-3,"interaction_annotation",fontsize=17)
ax.text(120, -6,  df.loc[query[0],genes_to_plot[18]][a_col[5]], fontsize=15)
ax.text(196,22,"Query_gene",fontsize=17)
ax.text(196, 0,  data_go.loc[query][col_label_go[4]], fontsize=15)
plt.xticks(fontsize=18, rotation=0)
plt.yticks(fontsize=18, rotation=0)
plt.xlabel('Percentage of the conection of interactors with_' + "".join(query),fontsize=18)

plt.savefig("common_interactors_" + "".join(query) + ".svg",dpi=300,format='svg')
```
## Results Figure
![Figure-showing-the-results](../images/output_common-genes-workflow.png)
