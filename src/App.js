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
    var textTest = `
    ${card.yamlTags}

    # Dataset Card for ${card.datasetName}
    
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
    
    - **Homepage:** ${card.homepage}
    - **Repository:** ${card.repository}
    - **Paper:** ${card.paper}
    - **Leaderboard:** ${card.leaderboard}
    - **Point of Contact:** ${card.contact}
    
    ### Dataset Summary
    
    ${card.datasetSummary}
    
    ### Supported Tasks and Leaderboards
    
    ${card.supportedTasks}
    
    ### Languages
    
    ${card.languages}
    
    ## Dataset Structure
    
    ### Data Instances
    
    ${card.dataInstances}
    
    ### Data Fields
    
    ${card.dataFields}
    
    ### Data Splits
    
    ${card.dataSplits}
    
    ## Dataset Creation
    
    ### Curation Rationale
    
    ${card.curationRationale}
    
    ### Source Data
    
    #### Initial Data Collection and Normalization
    
    ${card.dataCollection}
    
    #### Who are the source language producers?
    
    ${card.sourceLanguage}
    
    ### Annotations
    
    #### Annotation process
    
    ${card.annotationProcess}
    
    #### Who are the annotators?
    
    ${card.annotators}
    
    ### Personal and Sensitive Information
    
    ${card.personalInformation}
    
    ## Considerations for Using the Data
    
    ### Social Impact of Dataset
    
    ${card.socialImpact}
    
    ### Discussion of Biases
    
    ${card.biasesDiscussion}
    
    ### Other Known Limitations
    
    ${card.limitations}
    
    ## Additional Information
    
    ### Dataset Curators
    
    ${card.datasetCurators}
    
    ### Licensing Information
    
    ${card.licensingInformation}
    
    ### Citation Information
    
    ${card.citationInformation}
    `
    await save(textTest, "README.md")
  }


  return (
    <div className="overflow-y-auto min-h-full font-sans">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="max-h-screen flex overflow-hidden bg-white">
            <div className="max-w-7xl mb-32 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">New Dataset Card for <input onChange={(e) => handleChange(e)}  id="datasetName" placeholder="dataset name" maxLength="200" className="ml-4 py-4 text-4xl text-gray-600 w-80 border border-solid border-gray-200 border-none h-10 rounded-md shadow" /></p>
                <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">Fill in the form below</p>
              </div>
              <div className="flex justify-end">
                <button onClick={() => exportFile(card)} type="button" className="cursor-pointer inline-flex items-center px-3 py-2 border border-solid border-gray-300 shadow-sm text-base leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Export
                </button>
              </div>
              <div className="shadow max-h-full overflow-y-auto rounded-lg mt-4">
                <div className="max-w-7xl px-4 divide-y-2 divide-gray-200 sm:px-6 lg:px-8">
                  <div className="">
                    <dl className="space-y-8 divide-y p-6 divide-gray-200">
                      
                      <Section title={"YAML Tags"} section={tagsSection} handleSection={handleTagsSection} />
                      
                      {tagsSection &&
                      <InputField title={"YAML tags"} id={"yamlTags"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      }

                      <Section title={"Urls"} section={urlsSection} handleSection={handleUrlsSection} />

                      {urlsSection && 
                      <>
                      <InputField title={"Homepage"} id={"homepage"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Repository"} id={"repository"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Paper"} id={"paper"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Leaderboard"} id={"leaderboard"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Point of Contact"} id={"contact"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Description"} section={datasetDescriptionSection} handleSection={handleDatasetDescriptionSection} />
                      
                      {datasetDescriptionSection &&
                      <>
                      <InputField title={"Dataset Summary"} id={"datasetSummary"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Supported Tasks and Leaderboards"} id={"supportedTasks"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Languages"} id={"languages"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Structure"} section={datasetStructureSection} handleSection={handleDatasetStructureSection} />

                      {datasetStructureSection && 
                      <>
                      <InputField title={"Data Instances"} id={"dataInstances"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Data Fields"} id={"dataFields"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Data Splits"} id={"dataSplits"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Dataset Creation"} section={datasetCreationSection} handleSection={handleDatasetCreationSection} />

                      {datasetCreationSection &&
                      <>
                      <InputField title={"Curation Rationale"} id={"curationRationale"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Initial Data Collection and Normalization"} id={"dataCollection"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Who are the source language producers?"} id={"sourceLanguage"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Annotation Process"} id={"annotationProcess"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Who are the annotators?"} id={"annotators"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Personal and Sensitive Information"} id={"personalInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }
                      
                      <Section title={"Considerations for Using the Data"} section={considerationsSection} handleSection={handleConsiderationsSection} />

                      {considerationsSection &&
                      <>
                      <InputField title={"Social Impact of Dataset"} id={"socialImpact"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Discussion of Biases"} id={"biasesDiscussion"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Other Known Limitations"} id={"limitations"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      </>
                      }

                      <Section title={"Additional Information"} section={additionalInformationSection} handleSection={handleAdditionalInformationSection} />
                      
                      {additionalInformationSection &&
                      <>
                      <InputField title={"Dataset Curators"} id={"datasetCurators"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Licensing Information"} id={"licensingInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                      <InputField title={"Citation Information"} id={"citationInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
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
          <div className="max-w-7xl mx-auto w-full overflow-y-auto py-16 px-4 sm:py-24">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">Information</p>
              {!fieldFocussed &&
              <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">Click on a field to see instructions/example</p>
              }
            </div>
            <div className="max-w-7xl text-left mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-6">
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
                  <p className="mt-1 text-xl font-extrabold text-gray-700 sm:tracking-tight">Example</p>
                  {Instructions.instructions[fieldFocussed] && Instructions.instructions[fieldFocussed].example.map((ex) => (
                    <div key={ex}>
                      <ReactMarkdown source={ex}
                      renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
                      />                    
                    </div>
                  ))}
                  </dl>
                </div>   
            </div>
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
