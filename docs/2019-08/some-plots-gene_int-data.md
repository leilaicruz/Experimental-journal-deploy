##13082019- Some plots of genetic interactions vs common interactors

```python
import pandas as pd
import numpy as np
from collections import defaultdict
import seaborn as sns
import matplotlib.pyplot as plt
from statistics import mean
%matplotlib inline
```


```python

data_bem1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BEM1.xlsx')
data_bem3=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BEM3.xlsx')
data_bem2=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BEM2.xlsx')
data_nrp1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_NRP1.xlsx')
data_gpr1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_GPR1.xlsx')
data_cdc24=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CDC24.xlsx')
data_cdc42=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CDC42.xlsx')
data_rdi1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_RDI1.xlsx')
data_cla4=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CLA4.xlsx')
data_act1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_ACT1.xlsx')
data_bre5=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BRE5.xlsx')
data_cdc28=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CDC28.xlsx')
data_hsp82=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_HSP82.xlsx')
data_cdc3=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CDC3.xlsx')
data_ade13=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_ADE13.xlsx')
data_sec14=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_SEC14.xlsx')
data_arp2=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_ARP2.xlsx')
data_bim1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BIM1.xlsx')
data_bni1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BNI1.xlsx')
data_bub3=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_BUB3.xlsx')
data_cnb1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_CNB1.xlsx')
data_gim3=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_GIM3.xlsx')
data_lte1=pd.read_excel(r'C:\Users\linigodelacruz\Documents\PhD_2018\Documentation\Calculations\Functions\data_output_LTE1.xlsx')



```


```python
## Functions
def positive_int(data):
    return data[data['Type']=='Positive']['% of query subset']
def negative_int(data):
    return data[data['Type']=='Negative']['% of query subset']
def lethal_int(data):
    return data[data['Type']=='Synthetic Lethality']['% of query subset']
def average_data(data):
    return sum(data)/len(data)
```


```python
## Data
data=[data_bem1,data_bem2,data_cdc24,data_cdc42,data_cla4,data_act1,data_bre5,data_cdc28,data_cdc3,data_ade13,data_sec14,
      data_arp2,data_bim1,data_bni1,data_bub3,data_cnb1,data_gim3,data_lte1]
```


```python
## Positive Interactions
data_positive=[]

for names in data:
    data_positive.append(positive_int(names))

```


```python
## Negative Interactions
data_negative=[]

for names in data:
    data_negative.append(negative_int(names))
```


```python
## Synthetic Lethal interactions
data_lethality=[]

for names in data:
    data_lethality.append(lethal_int(names))
```


```python
## Average
mean_values_positive=[]
std_values_positive=[]
mean_values_negative=[]
std_values_negative=[]
mean_values_lethal=[]
std_values_lethal=[]
for i in range(0,len(data_positive)):
    mean_values_positive.append(np.mean(data_positive[i]))
    std_values_positive.append(np.std(data_positive[i]))
    mean_values_negative.append(np.mean(data_negative[i]))
    std_values_negative.append(np.std(data_negative[i]))
    mean_values_lethal.append(np.mean(data_lethality[i]))
    std_values_lethal.append(np.std(data_lethality[i]))

mean_values=[mean_values_positive,mean_values_negative,mean_values_lethal]

std_values=[std_values_positive,std_values_negative,std_values_lethal]

```


```python
## Violin plot for the averages and std for each gene positive, negative and synthetic lethal interactions
## Data quality

# Make a dictionary with one specific color per group:
my_pal = {"#ff9966",  '#ffff99', '#00cc99'}

fig, axes = plt.subplots(2, 2, figsize=(10,5), dpi=100, sharex=True, sharey=True)
plt.subplots_adjust(bottom=0.2, right=0.5, top=1.4)
fig.suptitle('Common interactions vs interaction type',x=0.5,y=1.05)

plt.subplot(2,2, 1)
sns.violinplot(data=mean_values,scale="count",palette = my_pal)
plt.xticks(np.arange(0,3),['positive','negative','synthetic lethal'])
plt.ylabel('Average of the % of common interactions',{'fontname':'Arial', 'size':'8'})
plt.grid(True)


plt.subplot(2,2,2)
sns.stripplot(data=mean_values,palette = my_pal)
plt.xticks(np.arange(0,3),['positive','negative','synthetic lethal'])
plt.grid(True)
plt.ylim(-5.8,25)

plt.subplot(2,2, 3)
sns.violinplot(data=std_values,scale="count",palette = my_pal)
plt.xticks(np.arange(0,3),['positive','negative','synthetic lethal'])
plt.ylabel('Standard deviation ',{'fontname':'Arial', 'size':'8'})
plt.grid(True)


plt.subplot(2,2,4)
sns.stripplot(data=std_values,palette = my_pal)
plt.xticks(np.arange(0,3),['positive','negative','synthetic lethal'])
plt.grid(True)
plt.ylim(-5.8,25)

plt.tight_layout()
plt.savefig("violinplot-average-std-common-interactors-vs-interaction-type.svg",dpi=300,format='svg')
plt.savefig("violinplot-average-std-common-interactors-vs-interaction-type.png",dpi=300,format='png')
```

    C:\Users\linigodelacruz\AppData\Local\Continuum\anaconda3\lib\site-packages\scipy\stats\stats.py:1713: FutureWarning: Using a non-tuple sequence for multidimensional indexing is deprecated; use `arr[tuple(seq)]` instead of `arr[seq]`. In the future this will be interpreted as an array index, `arr[np.array(seq)]`, which will result either in an error or a different result.
      return np.add.reduce(sorted[indexer] * weights, axis=axis) / sumval



![png](output_8_1.png)



```python
## Plots

fig, axes = plt.subplots(1, 3, figsize=(10,5), dpi=100, sharex=True, sharey=True)
fig.suptitle('Common interactions vs interaction type',x=0.5,y=1.05)
kwargs_positive = dict(alpha=0.5, bins=15, density=True, stacked=True)
kwargs_negative = dict(alpha=0.5, bins=9, density=True, stacked=True)
kwargs_lethal = dict(alpha=0.5, bins=11, density=True, stacked=True)

# Set the font dictionaries (for plot title and axis titles)
title_font = {'fontname':'Arial', 'size':'16', 'color':'black', 'weight':'normal',
              'verticalalignment':'bottom'} # Bottom vertical alignment for more space
axis_font = {'fontname':'Arial', 'size':'8'}

## Positive Interactions
plt.subplots_adjust(bottom=0.5, right=1.4, top=1.4)
#fig.suptitle('This is a somewhat long figure title', fontsize=16)

plt.subplot(1,3, 1)
plt.grid(True)
plt.ylabel('Normalized frequency',**axis_font)
plt.xlabel('% of common interactions with the query gene',**axis_font)
plt.xlim(0,50)
# plt.ylim(0,0.15)
plt.hist(data_positive[1:len(data_positive)],**kwargs_positive,label=['Positive Interactions'],cumulative=False)
plt.title('Positive Interactions')

plt.subplot(1,3, 2)
plt.grid(True)
#plt.ylabel('Normalized frequency',**axis_font)
plt.xlim(0,50)
# plt.ylim(0,0.15)
plt.xlabel('% of common interactions with the query gene',**axis_font)
plt.hist(data_negative[1:len(data_negative)],**kwargs_negative,label=['Negative Interactions'],cumulative=False)
plt.title('Negative Interactions')

plt.subplot(1,3, 3)
plt.grid(True)
#plt.ylabel('Normalized frequency',**axis_font)
plt.xlim(0,50)
# plt.ylim(0,0.15)
plt.xlabel('% of common interactions with the query gene',**axis_font)
plt.hist(data_lethality[1:len(data_lethality)],**kwargs_lethal,label=['Lethality Interactions'],cumulative=False)
plt.title('Synthetic Lethal Interactions')

plt.tight_layout()
plt.savefig("common-interactors-vs-interaction-type.tiff",dpi=300,format='tiff')
```


![png](output_9_0.png)



```python
fig, axes = plt.subplots(1, 3, figsize=(10,5), dpi=100, sharex=True, sharey=True)
fig.suptitle('Common interactions per interaction type',x=0.5,y=1.05)
plt.subplot(1,3, 1)
plt.title('Positive interactors')
plt.grid(True)
plt.ylabel('')
plt.ylim(0,100)
ax = sns.boxplot(data=data_positive,orient="h")
sns.set_style("whitegrid")

plt.subplot(1,3, 2)
plt.title('Negative interactors')
plt.grid(True)
plt.ylim(0,100)
ax1 = sns.boxplot(data=data_negative,orient="h")
sns.set_style("whitegrid")

plt.subplot(1,3,3)
plt.title('Synthetic Lethal interactors')
plt.grid(True)
plt.ylim(0,100)
ax2 = sns.boxplot(data=data_lethality,orient="h")
sns.set_style("whitegrid")


plt.subplots_adjust(bottom=0.5, right=1.4, top=1.4)


plt.tight_layout()
plt.savefig("boxplot-common-interactors-vs-interaction-type.tiff",dpi=300,format='tiff')
```


![png](output_10_0.png)



```python
fig, axes = plt.subplots(1, 3, figsize=(10,10), dpi=100, sharex=True, sharey=True)
fig.suptitle('Common interactions per interaction type',x=0.5,y=1.05)
plt.subplot(1,3, 1)
plt.title('Positive interactors')
plt.grid(True)
plt.ylabel('')
plt.ylim(-20,100)
ax = sns.violinplot(data=data_positive,scale="count",orient='h')
sns.set_style("whitegrid")

plt.subplot(1,3, 2)
plt.title('Negative interactors')
plt.grid(True)
plt.ylim(-20,100)
ax1 = sns.violinplot(data=data_negative,scale="count",orient='h')
sns.set_style("whitegrid")

plt.subplot(1,3,3)
plt.title('Synthetic Lethal interactors')
plt.grid(True)
plt.ylim(-20,100)
ax2 = sns.violinplot(data=data_lethality,scale="count",orient='h')
sns.set_style("whitegrid")


plt.subplots_adjust(bottom=0.5, right=1.4, top=1.4)


plt.tight_layout()
plt.savefig("violinplot-common-interactors-vs-interaction-type.tiff",dpi=300,format='tiff')
```

    C:\Users\linigodelacruz\AppData\Local\Continuum\anaconda3\lib\site-packages\scipy\stats\stats.py:1713: FutureWarning: Using a non-tuple sequence for multidimensional indexing is deprecated; use `arr[tuple(seq)]` instead of `arr[seq]`. In the future this will be interpreted as an array index, `arr[np.array(seq)]`, which will result either in an error or a different result.
      return np.add.reduce(sorted[indexer] * weights, axis=axis) / sumval



![png](output_11_1.png)



```python

```
