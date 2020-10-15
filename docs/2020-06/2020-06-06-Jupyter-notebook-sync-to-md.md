# Title: 06062020- Steps to successfully interoperate between Jupyter notebooks and markdown .  

## Date
06062020

## Objective

- Make code and documentation inter-operable. 
- In order to set up a synchronization between coding and documentation, it is necessary that jupyter notebooks writing and coding is consistent with markdown , for web deployment and to generate useful documentation ready to distribute. 

- The goal of this document is to show how to do that. 

## Method

- Use of the following tools: Jupyter Notebook, Jupytext, Pandoc , Visual Studio

### Steps: 

1. Starting from writing a python notebook showing for example an storyline of  data analysis , FOR EVERY MARKDOWN CELL WRITTEN, THE TEXT HAS TO BE ENLCOSED WITH ```md {TEXT} ``` WITH ``` LIKE AN INLINE CODE. 

**OPTION USING JUPYTEXT IN BASH TO MANUALLY CONVERT FROM .IPYNB TO .MD**
2. Here, we can use then the following command in bash to convert the notebook as MyST markdown which is a rich markdown able to execute python cells. 
    ```bash
    jupytext mynotebook.ipynb --to myst
    ```
    - This option is asynchronicus because depend on the time of the  conversion by the user. 
    - Once this notebook is converted in MysT it can be included in the `toc.yaml` inside the `docs` folder for the jupyter book deployment. 

**OPTION USING JUPYTER NOTEBOOK TO AUTOMATICALLY SYNC THE NOTEBOOK TO A MARKDOWN DOCUMENT**

 - Install in `Anaconda Powershell Prompt` the MyST parser: ` conda install -c conda-forge myst-parser`

 - Open the jupyter notebook using `Jupyter Notebook` :
    - Open the notebook
    - Go to File and go to `Jupytext tab` and select `Pair this notebook with MysT Markdown`
    - Deselect the option of autosave inside the `Jupytext Tab` 
 By doing this all the changes we do to the notebook will be synced in the .md document. :) 

 - As in the option before :  Include the.md docuement into the `toc.yaml` inside the `docs` folder for the jupyter book deployment. 

## Results

## Conclusion