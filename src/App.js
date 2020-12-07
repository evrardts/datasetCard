import React, { useState } from 'react';
import InputField from "./InputField"
import Instructions from './Instructions'
import ReactMarkdown from "react-markdown";
import {save} from 'save-file'

function App() {

  const [fieldFocussed, setFieldFocussed] = useState()
  const [card, setCard] = useState({})

  async function handleClick(e){
    setFieldFocussed(e.target.id)
  }

  async function handleChange(e){
    setCard({...card, [e.target.id]:e.currentTarget.value})
  }

  async function exportFile(card){ 
    var textTest = `
    # Dataset Card for [Dataset Name]
    
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
            <div className="h-screen flex overflow-hidden bg-white">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">New Dataset Card</p>
                  <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">Fill in the form below</p>
                </div>

                <div className="shadow p-4 rounded-lg">
                  <div className="max-w-7xl overflow-y-auto max-h-lg mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
                    
                    <div className="mt-2">
                      <dl className="space-y-8 divide-y divide-gray-200">
                        
                        <InputField title={"Homepage"} id={"homepage"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Repository"} id={"repository"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Paper"} id={"paper"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Leaderboard"} id={"leaderboard"} rows={1} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Point of Contact"} id={"contact"} rows={1} handleClick={handleClick} handleChange={handleChange} />

                        <InputField title={"Dataset Summary"} id={"datasetSummary"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Supported Tasks and Leaderboards"} id={"supportedTasks"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Languages"} id={"languages"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Data Instances"} id={"dataInstances"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Data Fields"} id={"dataFields"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Data Splits"} id={"dataSplits"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Curation Rationale"} id={"curationRationale"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Initial Data Collection and Normalization"} id={"dataCollection"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Who are the source language producers?"} id={"sourceLanguage"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Annotation Process"} id={"annotationProcess"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Who are the annotators?"} id={"annotators"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Personal and Sensitive Information"} id={"personalInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Social Impact of Dataset"} id={"socialImpact"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Discussion of Biases"} id={"biasesDiscussion"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Other Known Limitations"} id={"limitations"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Dataset Curators"} id={"datasetCurators"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Licensing Information"} id={"licensingInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        <InputField title={"Citation Information"} id={"citationInformation"} rows={4} handleClick={handleClick} handleChange={handleChange} />
                        
                      </dl>
                    </div>

                  </div>
                </div>

                <div className="flex justify-center mt-10">
                <button onClick={() => exportFile(card)} type="button" className="cursor-pointer inline-flex items-center px-3 py-2 border border-solid border-gray-300 shadow-sm text-base leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Export
                </button>
                </div>

              </div>
            </div>
            
            </div>
            <div className="col-span-4">
            <div className="h-screen flex overflow-hidden bg-gray-100">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:tracking-tight">Instructions</p>
                  {!fieldFocussed &&
                  <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">Click on a field to see instructions</p>
                  }
                </div>
                <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
                    
                    <div className="mt-6">
                      <dl className="space-y-8 divide-gray-200 text-gray-500">
                      {Instructions.instructions[fieldFocussed] && Instructions.instructions[fieldFocussed].paragraph.map((para) => (
                        <div key={para}>
                          <ReactMarkdown source={para}
                          renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
                          />                    
                        </div>
                      ))}
                      </dl>
                    </div>
                </div>
            </div>      
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default App;
