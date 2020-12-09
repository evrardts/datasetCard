import React, { useState } from 'react';
import InputField from "./InputField"
import Section from "./Section"
import Instructions from './Instructions'
import ReactMarkdown from "react-markdown";
import {save} from 'save-file'


function App() {

  const [fieldFocussed, setFieldFocussed] = useState()
  const [card, setCard] = useState({})
  const [tagsSection, setTagsSection] = useState(false)
  const [urlsSection, setUrlsSection] = useState(false)
  const [datasetDescriptionSection, setDatasetDescriptionSection] = useState(false)
  const [datasetStructureSection, setDatasetStructureSection] = useState(false)
  const [datasetCreationSection, setDatasetCreationSection] = useState(false)
  const [considerationsSection, setConsiderationsSection] = useState(false)
  const [additionalInformationSection, setAdditionalInformationSection] = useState(false)

  async function handleClick(e){
    setFieldFocussed(e.target.id)
  }

  async function handleChange(e){
    setCard({...card, [e.target.id]:e.currentTarget.value})
  }

  async function handleTagsSection(){
    setAdditionalInformationSection(false)
    setConsiderationsSection(false)
    setDatasetCreationSection(false)
    setDatasetStructureSection(false)
    setDatasetDescriptionSection(false)
    setUrlsSection(false)
    setTagsSection(!tagsSection)
  }

  async function handleUrlsSection(){
    setAdditionalInformationSection(false)
    setConsiderationsSection(false)
    setDatasetCreationSection(false)
    setDatasetStructureSection(false)
    setDatasetDescriptionSection(false)
    setTagsSection(false)
    setUrlsSection(!urlsSection)
  }

  async function handleDatasetDescriptionSection(){
    setAdditionalInformationSection(false)
    setConsiderationsSection(false)
    setDatasetCreationSection(false)
    setDatasetStructureSection(false)
    setTagsSection(false)
    setUrlsSection(false)
    setDatasetDescriptionSection(!datasetDescriptionSection)
  }

  async function handleDatasetStructureSection(){
    setAdditionalInformationSection(false)
    setConsiderationsSection(false)
    setDatasetCreationSection(false)
    setDatasetDescriptionSection(false)
    setTagsSection(false)
    setUrlsSection(false)
    setDatasetStructureSection(!datasetStructureSection)
  }

  async function handleDatasetCreationSection(){
    setAdditionalInformationSection(false)
    setConsiderationsSection(false)
    setDatasetDescriptionSection(false)
    setTagsSection(false)
    setUrlsSection(false)
    setDatasetStructureSection(false)
    setDatasetCreationSection(!datasetCreationSection)
  }

  async function handleConsiderationsSection(){
    setAdditionalInformationSection(false)
    setDatasetDescriptionSection(false)
    setTagsSection(false)
    setUrlsSection(false)
    setDatasetStructureSection(false)
    setDatasetCreationSection(false)
    setConsiderationsSection(!considerationsSection)
  }

  async function handleAdditionalInformationSection(){
    setDatasetDescriptionSection(false)
    setTagsSection(false)
    setUrlsSection(false)
    setDatasetStructureSection(false)
    setDatasetCreationSection(false)
    setConsiderationsSection(false)
    setAdditionalInformationSection(!additionalInformationSection)
  }

  async function exportFile(card){ 
    var textTest = 
`${card.yamlTags ? card.yamlTags : "[Needs More Information]"}

# Dataset Card for ${card.datasetName ? card.datasetName : "[Needs More Information]"}

## Table of Contents
- [Dataset Description](#dataset-description)
  - [Dataset Summary](#dataset-summary)
  - [Supported Tasks](#supported-tasks-and-leaderboards)
  - [Languages](#languages)
- [Dataset Structure](#dataset-structure)
  - [Data Instances](#data-instances)
  - [Data Fields](#data-instances)
  - [Data Splits](#data-instances)
- [Dataset Creation](#dataset-creation)
  - [Curation Rationale](#curation-rationale)
  - [Source Data](#source-data)
  - [Annotations](#annotations)
  - [Personal and Sensitive Information](#personal-and-sensitive-information)
- [Considerations for Using the Data](#considerations-for-using-the-data)
  - [Social Impact of Dataset](#social-impact-of-dataset)
  - [Discussion of Biases](#discussion-of-biases)
  - [Other Known Limitations](#other-known-limitations)
- [Additional Information](#additional-information)
  - [Dataset Curators](#dataset-curators)
  - [Licensing Information](#licensing-information)
  - [Citation Information](#citation-information)

## Dataset Description

- **Homepage:** ${card.homepage ? card.homepage : "[Needs More Information]"}
- **Repository:** ${card.repository ? card.repository : "[Needs More Information]"}
- **Paper:** ${card.paper ? card.paper : "[Needs More Information]"}
- **Leaderboard:** ${card.leaderboard ? card.leaderboard : "[Needs More Information]"}
- **Point of Contact:** ${card.contact ? card.contact : "[Needs More Information]"}

### Dataset Summary

${card.datasetSummary ? card.datasetSummary: "[Needs More Information]"}

### Supported Tasks and Leaderboards

${card.supportedTasks ? card.supportedTasks : "[Needs More Information]"}

### Languages

${card.languages ? card.languages : "[Needs More Information]"}

## Dataset Structure

### Data Instances

${card.dataInstances ? card.dataInstances : "[Needs More Information]"}

### Data Fields

${card.dataFields ? card.dataFields : "[Needs More Information]"}

### Data Splits

${card.dataSplits ? card.dataSplits : "[Needs More Information]"}

## Dataset Creation

### Curation Rationale

${card.curationRationale ? card.curationRationale : "[Needs More Information]"}

### Source Data

#### Initial Data Collection and Normalization

${card.dataCollection ? card.dataCollection : "[Needs More Information]"}

#### Who are the source language producers?

${card.sourceLanguage ? card.sourceLanguage : "[Needs More Information]"}

### Annotations

#### Annotation process

${card.annotationProcess ? card.annotationProcess : "[Needs More Information]"}

#### Who are the annotators?

${card.annotators ? card.annotators : "[Needs More Information]"}

### Personal and Sensitive Information

${card.personalInformation ? card.personalInformation : "[Needs More Information]"}

## Considerations for Using the Data

### Social Impact of Dataset

${card.socialImpact ? card.socialImpact : "[Needs More Information]"}

### Discussion of Biases

${card.biasesDiscussion ? card.biasesDiscussion : "[Needs More Information]"}

### Other Known Limitations

${card.limitations ? card.limitations : "[Needs More Information]"}

## Additional Information

### Dataset Curators

${card.datasetCurators ? card.datasetCurators : "[Needs More Information]"}

### Licensing Information

${card.licensingInformation ? card.licensingInformation : "[Needs More Information]"}

### Citation Information

${card.citationInformation ? card.citationInformation : "[Needs More Information]"}`
    await save(textTest, "README.md")
  }


  return (
    <div className="overflow-y-auto min-h-full font-sans">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="max-h-screen flex justify-center overflow-hidden bg-white">
            <div className="xxs:max-w-xxs xs:max-w-xs md:max-w-2xl xl:max-w-4xl xxl:min-w-5xl py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">New Dataset Card for <input onChange={(e) => handleChange(e)}  id="datasetName" placeholder="dataset name" maxLength="200" className="ml-4 py-4 text-4xl text-gray-600 w-80 border border-solid border-gray-200 border-none h-10 rounded-md shadow" /></p>
                <p className="max-w-xl mt-2 mx-auto text-lg text-gray-500">Fill in the form below</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => exportFile(card)} type="button" className="cursor-pointer inline-flex items-center px-3 py-2 border border-solid border-gray-300 shadow-sm text-base leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Export
                </button>
              </div>
              <div className="shadow w-full xxs:max-h-xxs md:max-h-xs mb-32 lg:max-h-md xl:max-h-xl xxl:max-h-screen overflow-y-auto rounded-lg mt-4">
                <div className="max-w-7xl px-4 divide-y-2 divide-gray-200 sm:px-6 lg:px-8">
                  <div className="">
                    <dl className="space-y-8 divide-y p-6 divide-gray-200">
                      
                      <Section title={"YAML Tags"} section={tagsSection} handleSection={handleTagsSection} />
                      
                      {tagsSection &&
                      <InputField value={card.yamlTags} title={"YAML tags"} id={"yamlTags"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      }

                      <Section title={"Urls"} section={urlsSection} handleSection={handleUrlsSection} />

                      {urlsSection && 
                      <>
                      <InputField value={card.homepage} title={"Homepage"} id={"homepage"} rows={2} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.repository} title={"Repository"} id={"repository"} rows={2} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.paper} title={"Paper"} id={"paper"} rows={2} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.leaderboard} title={"Leaderboard"} id={"leaderboard"} rows={2} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.contact} title={"Point of Contact"} id={"contact"} rows={2} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Description"} section={datasetDescriptionSection} handleSection={handleDatasetDescriptionSection} />
                      
                      {datasetDescriptionSection &&
                      <>
                      <InputField value={card.datasetSummary} title={"Dataset Summary"} id={"datasetSummary"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.supportedTasks} title={"Supported Tasks and Leaderboards"} id={"supportedTasks"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.languages} title={"Languages"} id={"languages"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Structure"} section={datasetStructureSection} handleSection={handleDatasetStructureSection} />

                      {datasetStructureSection && 
                      <>
                      <InputField value={card.dataInstances} title={"Data Instances"} id={"dataInstances"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.dataFields} title={"Data Fields"} id={"dataFields"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.dataSplits} title={"Data Splits"} id={"dataSplits"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Creation"} section={datasetCreationSection} handleSection={handleDatasetCreationSection} />

                      {datasetCreationSection &&
                      <>
                      <InputField value={card.curationRationale} title={"Curation Rationale"} id={"curationRationale"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.dataCollection} title={"Initial Data Collection and Normalization"} id={"dataCollection"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.sourceLanguage} title={"Who are the source language producers?"} id={"sourceLanguage"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.annotationProcess} title={"Annotation Process"} id={"annotationProcess"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.annotators} title={"Who are the annotators?"} id={"annotators"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.personalInformation} title={"Personal and Sensitive Information"} id={"personalInformation"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }
                      
                      <Section title={"Considerations for Using the Data"} section={considerationsSection} handleSection={handleConsiderationsSection} />

                      {considerationsSection &&
                      <>
                      <InputField value={card.socialImpact} title={"Social Impact of Dataset"} id={"socialImpact"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.biasesDiscussion} title={"Discussion of Biases"} id={"biasesDiscussion"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField value={card.limitations} title={"Other Known Limitations"} id={"limitations"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Additional Information"} section={additionalInformationSection} handleSection={handleAdditionalInformationSection} />
                      
                      {additionalInformationSection &&
                      <>
                      <InputField title={"Dataset Curators"} id={"datasetCurators"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Licensing Information"} id={"licensingInformation"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Citation Information"} id={"citationInformation"} rows={6} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }
                      
                    </dl>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
        <div className="col-span-4">
        <div className="h-screen flex overflow-hidden bg-gray-100">
          <div className="max-w-7xl mx-auto w-full py-8 px-4 sm:py-12">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">Information</p>
              {!fieldFocussed &&
              <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">Click on a field to see instructions & example</p>
              }
            </div>
            {fieldFocussed &&
            <div className="max-w-7xl xxs:max-h-xxs md:max-h-xs mb-32 lg:max-h-md xl:max-h-xl xxl:max-h-screen overflow-y-auto text-left mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-12">
                  <dl className="space-y-8 divide-gray-200 text-gray-600 text-left">
                  <p className="mt-1 text-xl font-extrabold text-gray-700 sm:tracking-tight">Instructions</p>
                  {Instructions.instructions[fieldFocussed] && Instructions.instructions[fieldFocussed].paragraph.map((para) => (
                    <div key={para}>
                      <ReactMarkdown source={para}
                      renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
                      />                    
                    </div>
                  ))}
                  </dl>
                </div>
                <div className="mt-12">
                  <dl className="space-y-8 divide-gray-200 text-gray-600 text-left">
                  <p className="mt-1 text-xl font-extrabold text-gray-700 sm:tracking-tight"><ReactMarkdown renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}} source={"Example from the [ELI5 dataset card](https://github.com/huggingface/datasets/blob/master/datasets/eli5/README.md)"}/></p>
                  <div className="">
                  {Instructions.instructions[fieldFocussed] && Instructions.instructions[fieldFocussed].example.map((ex, index) => (
                    <div className="mt-2" key={ex+index}>
                      {ex}
                    </div>
                  ))}
                  </div>
                  </dl>
                </div>   
            </div>
            }
            <div className="absolute bottom-0 text-xs left-0 ml-4 text-gray-500">
              developed by
              <a className="ml-1 no-underline text-gray-500" href={"https://huggingface.co/evrardts"} target="_blank">
                Evrard t'Serstevens
              </a>
            </div> 
          </div>     
        </div>
        </div>
      </div>  
      <style>{`
      .borders {
        border-bottom: solid 1px;
        border-color: #e2e8f0;
        }
      `}</style>
    </div>
  );
}

export default App;
