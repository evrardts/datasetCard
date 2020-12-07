const NAME = 'Instructions'

export default {
    name: NAME,
    instructions: {
          yamlTags: {
            paragraph: [
              "Add YAML tags"
            ],
            example: [
              `---
              annotations_creators:
              - no-annotation
              language_creators:
              - found
              languages:
              - en
              licenses:
              - unknown
              multilinguality:
              - monolingual
              size_categories:
              - 100K<n<1M
              source_datasets:
              - original
              task_categories:
              - question-answering
              task_ids:
              - abstractive-qa
              - open-domain-qa
              ---`
            ]
          },
          homepage: {
            paragraph: [
              "Add homepage URL here if available (unless it's a GitHub repository)"
            ],
            example: [
              "[ELI5 homepage](https://facebookresearch.github.io/ELI5/explore.html)"
            ]
          },
          repository: {
            paragraph: [
              "If the dataset is hosted on github or has a github homepage, add URL here"
            ],
            example: [
              "[ELI5 repository](https://github.com/facebookresearch/ELI5)"
            ]
          }, 
          paper: {
            paragraph: [
              "If the dataset was introduced by a paper or there was a paper written describing the dataset, add URL here (landing page for Arxiv paper preferred)"
            ],
            example: [
              "[ELI5: Long Form Question Answering](https://arxiv.org/abs/1907.09190)"
            ]
          }, 
          leaderboard: {
            paragraph: [
              "If the dataset supports an active leaderboard, add link here"
            ],
            example: [
              ""
            ]
          },  
          contact: {
            paragraph: [
              "If known, name and email of at least one person the reader can contact for questions about the dataset."
            ],
            example: [
              "[Yacine Jernite](mailto:yacine@huggingface.co)"
            ]
          },    
          datasetSummary: {
            paragraph: [
              "Briefly summarize the dataset, its intended use and the supported tasks. Give an overview of how and why the dataset was created. The summary should explicitly mention the languages present in the dataset (possibly in broad terms, e.g. translations between several pairs of European languages), and describe the domain, topic, or genre covered."
            ],
            example: [
              "The ELI5 dataset is an English-language dataset of questions and answers gathered from three subreddits were users ask factual questions requiring paragraph-length or longer answers. The dataset was created to support the task of open-domain long form abstractive question answering, and covers questions about general topics in its [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive/) subset, science in it [r/askscience](https://www.reddit.com/r/askscience/) subset, and History in its [r/AskHistorians](https://www.reddit.com/r/AskHistorians/) subset."
            ]
          },
          supportedTasks: {
            paragraph: [
              "For each of the tasks tagged for this dataset, give a brief description of the tag, metrics, and suggested models (with a link to their HuggingFace implementation if available). Give a similar description of tasks that were not covered by the structured tag set (repace the `task-category-tag` with an appropriate `other:other-task-name`).",
              "- `task-category-tag`: The dataset can be used to train a model for [TASK NAME], which consists in [TASK DESCRIPTION]. Success on this task is typically measured by achieving a *high/low* [metric name](https://huggingface.co/metrics/metric_name). The ([model name](https://huggingface.co/model_name) or [model class](https://huggingface.co/transformers/model_doc/model_class.html)) model currently achieves the following score. *[IF A LEADERBOARD IS AVAILABLE]:* This task has an active leaderboard which can be found at [leaderboard url]() and ranks models based on [metric name](https://huggingface.co/metrics/metric_name) while also reporting [other metric name](https://huggingface.co/metrics/other_metric_name)."
            ],
            example: [
              "- `abstractive-qa`, `open-domain-qa`: The dataset can be used to train a model for Open Domain Long Form Question Answering. An LFQA model is presented with a non-factoid and asked to retrieve relevant information from a knowledge source (such as [Wikipedia](https://www.wikipedia.org/)), then use it to generate a multi-sentence answer. The model performance is measured by how high its [ROUGE](https://huggingface.co/metrics/rouge) score to the reference is. A [BART-based model](https://huggingface.co/yjernite/bart_eli5) with a [dense retriever](https://huggingface.co/yjernite/retribert-base-uncased) trained to draw information from [Wikipedia passages](https://huggingface.co/datasets/wiki_snippets) achieves a [ROUGE-L of 0.149](https://yjernite.github.io/lfqa.html#generation)."
            ]
          },
          languages: {
            paragraph: [
              "Provide a brief overview of the languages represented in the dataset. Describe relevant details about specifics of the language such as whether it is social media text, African American English,...",
              "When relevant, please provide [BCP-47 codes](https://tools.ietf.org/html/bcp47), which consist of a [primary language subtag](https://tools.ietf.org/html/bcp47#section-2.2.1), with a [script subtag](https://tools.ietf.org/html/bcp47#section-2.2.3) and/or [region subtag](https://tools.ietf.org/html/bcp47#section-2.2.4) if available."
            ],
            example: [
              "The text in the dataset is in English, as spoken by Reddit users on the  [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive/), [r/askscience](https://www.reddit.com/r/askscience/), and [r/AskHistorians](https://www.reddit.com/r/AskHistorians/) subreddits. The associated BCP-47 code is `en`."
            ]
          },
          dataInstances: {
            paragraph: [
              "Provide an JSON-formatted example and brief description of a typical instance in the dataset. If available, provide a link to further examples.",
              `
              {
                'example_field': ...,
                ...
              }
              `,
              "Provide any additional information that is not covered in the other sections about the data here. In particular describe any relationships between data points and if these relationships are made explicit.",
            ],
            example: [
              "A typical data point comprises a question, with a `title` containing the main question and a `selftext` which sometimes elaborates on it, and a list of answers from the forum sorted by the number of upvotes they obtained. Additionally, the URLs in each of the text fields have been  extracted to respective lists and replaced by generic tokens in the text.",
              "An example from the ELI5 test set looks as follows:",
              `
              {'q_id': '8houtx',
               'title': 'Why does water heated to room temperature feel colder than the air around it?',
               'selftext': '',
               'document': '',
               'subreddit': 'explainlikeimfive',
               'answers': {'a_id': ['dylcnfk', 'dylcj49'],
                'text': ["Water transfers heat more efficiently than air. When something feels cold it's because heat is being transferred from your skin to whatever you're touching. Since water absorbs the heat more readily than air, it feels colder.",
                 "Air isn't as good at transferring heat compared to something like water or steel (sit on a room temperature steel bench vs. a room temperature wooden bench, and the steel one will feel more cold).\n\nWhen you feel cold, what you're feeling is heat being transferred out of you.  If there is no breeze, you feel a certain way.  If there's a breeze, you will get colder faster (because the moving air is pulling the heat away from you), and if you get into water, its quite good at pulling heat from you.   Get out of the water and have a breeze blow on you while you're wet, all of the water starts evaporating, pulling even more heat from you."],
                'score': [5, 2]},
               'title_urls': {'url': []},
               'selftext_urls': {'url': []},
               'answers_urls': {'url': []}}
              `
            ]
          },
          dataFields: {
            paragraph: [
              "List and describe the fields present in the dataset. Mention their data type, and whether they are used as input or output in any of the tasks the dataset currently supports. If the data has span indices, describe their attributes, such as whether they are at the character level or word level, whether they are contiguous or not, etc. If the datasets contains example IDs, state whether they have an inherent meaning, such as a mapping to other datasets or pointing to relationships between data points.",
              "- `example_field`: description of `example_field`"
            ], 
            example: [
              `- q_id: a string question identifier for each example, corresponding to its ID in the [Pushshift.io](https://files.pushshift.io/reddit/submissions/) Reddit submission dumps.`,
              `- subreddit: One of explainlikeimfive, askscience, or AskHistorians, indicating which subreddit the question came from`,
              `- title: title of the question, with URLs extracted and replaced by URL_n tokens`,
              `- title_urls: list of the extracted URLs, the nth element of the list was replaced by URL_n`,
              `- selftext: either an empty string or an elaboration of the question`,
              `- selftext_urls: similar to title_urls but for self_text`,
              `- answers: a list of answers, each answer has:`,
                `- a_id: a string answer identifier for each answer, corresponding to its ID in the [Pushshift.io](https://files.pushshift.io/reddit/comments/) Reddit comments dumps.`,
                `- text: the answer text with the URLs normalized`,
                `- score: the number of upvotes the answer had received when the dumps were created`,
              `- answers_urls: a list of the extracted URLs. All answers use the same list, the numbering of the normalization token continues across answer texts`,
            ]
          },
          dataSplits: {
            paragraph: [
              "Describe and name the splits in the dataset if there are more than one.",
              "Describe any criteria for splitting the data, if used. If their are differences between the splits (e.g. if the training annotations are machine-generated and the dev and test ones are created by humans, or if different numbers of annotators contributed to each example), describe them here.",
              "Provide the sizes of each split. As appropriate, provide any descriptive statistics for the features, such as average length.  For example:",
              `	Tain	Valid	Test
              Input Sentences 	
              Average Sentence Length`,
            ],
            example: [
              "The data is split into a training, validation and test set for each of the three subreddits. In order to avoid having duplicate questions in across sets, the `title` field of each of the questions were ranked by their tf-idf match to their nearest neighbor and the ones with the smallest value were used in the test and validation sets. The final split sizes are as follow:",
              `	Tain	Valid	Test
              r/explainlikeimfive examples	272634	9812	24512
              r/askscience examples	131778	2281	4462
              r/AskHistorians examples	98525	4901	9764`,
            ]
          },
          curationRationale: {
            paragraph: [
              "What need motivated the creation of this dataset? What are some of the reasons underlying the major choices involved in putting it together?",
            ],
            example: [
              "ELI5 was built to provide a testbed for machines to learn how to answer more complex questions, which requires them to find and combine information in a coherent manner. The dataset was built by gathering questions that were asked by community members of three subreddits, including [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive/), along with the answers that were provided by other users. The [rules of the subreddit](https://www.reddit.com/r/explainlikeimfive/wiki/detailed_rules) make this data particularly well suited to training a model for abstractive question answering: the questions need to seek an objective explanation about well established facts, and the answers provided need to be understandable to a layperson without any particular knowledge domain."
            ]
          },
          dataCollection: {
            paragraph: [
              "Describe the data collection process. Describe any criteria for data selection or filtering. List any key words or search terms used. If possible, include runtime information for the collection process.",
              "If data was collected from other pre-existing datasets, link to source here and to their [Hugging Face version](https://huggingface.co/datasets/dataset_name).",
              "If the data was modified or normalized after being collected (e.g. if the data is word-tokenized), describe the process and the tools used."
            ],
            example:[
              "The data was obtained by filtering submissions and comments from the subreddits of interest from the XML dumps of the [Reddit forum](https://www.reddit.com/) hosted on [Pushshift.io](https://files.pushshift.io/reddit/).",
              "In order to further improve the quality of the selected examples, only questions with a score of at least 2 and at least one answer with a score of at least 2 were selected for the dataset. The dataset questions and answers span a period form August 2012 to August 2019."
            ]
          },
          sourceLanguage: {
            paragraph: [
              "State whether the data was produced by humans or machine generated. Describe the people or systems who originally created the data.",
              "If available, include self-reported demographic or identity information for the source data creators, but avoid inferring this information. Instead state that this information is unknown. See [Larson 2017](https://www.aclweb.org/anthology/W17-1601.pdf) for using identity categories as a variables, particularly gender.",
              "Describe the conditions under which the data was created (for example, if the producers were crowdworkers, state what platform was used, or if the data was found, what website the data was found on). If compensation was provided, include that information here.",
              "Describe other people represented or mentioned in the data. Where possible, link to references for the information."
            ],
            example: [
            "The language producers are users of the [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive/), [r/askscience](https://www.reddit.com/r/askscience/), and [r/AskHistorians](https://www.reddit.com/r/AskHistorians/) subreddits between 2012 and 2019. No further demographic information was available from the data source."
            ]
          },
          annotations: {
            paragraph: [
              "If the dataset contains annotations which are not part of the initial data collection, describe them in the following paragraphs."
            ],
            example: [
              "The dataset does not contain any additional annotations."
            ]
          },
          annotationProcess: {
            paragraph: [
              "If applicable, describe the annotation process and any tools used, or state otherwise. Describe the amount of data annotated, if not all. Describe or reference annotation guidelines provided to the annotators. If available, provide interannotator statistics. Describe any annotation validation processes."
            ],
            example: [
              "[N/A]"
            ]
          },
          annotators: {
            paragraph: [
              "If annotations were collected for the source data (such as class labels or syntactic parses), state whether the annotations were produced by humans or machine generated.",
              "Describe the people or systems who originally created the annotations and their selection criteria if applicable.",
              "If available, include self-reported demographic or identity information for the annotators, but avoid inferring this information. Instead state that this information is unknown. See [Larson 2017](https://www.aclweb.org/anthology/W17-1601.pdf) for using identity categories as a variables, particularly gender.",
              "Describe the conditions under which the data was annotated (for example, if the annotators were crowdworkers, state what platform was used, or if the data was found, what website the data was found on). If compensation was provided, include that information here."
            ],
            example: [
              "[N/A]"
            ]
          },
          personalInformation: {
            paragraph: [
              "State whether the dataset uses identity categories and, if so, how the information is used. Describe where this information comes from (i.e. self-reporting, collecting from profiles, inferring, etc.). See [Larson 2017](https://www.aclweb.org/anthology/W17-1601.pdf) for using identity categories as a variables, particularly gender. State whether the data is linked to individuals and whether those individuals can be identified in the dataset, either directly or indirectly (i.e., in combination with other data).",
              "State whether the dataset contains other data that might be considered sensitive (e.g., data that reveals racial or ethnic origins, sexual orientations, religious beliefs, political opinions or union memberships, or locations; financial or health data; biometric or genetic data; forms of government identification, such as social security numbers; criminal history).",
              "If efforts were made to anonymize the data, describe the anonymization process."
            ],
            example: [
              "The authors removed the speaker IDs from the [Pushshift.io](https://files.pushshift.io/reddit/) dumps but did not otherwise anonymize the data. Some of the questions and answers are about contemporary public figures or individuals who appeared in the news."
            ]
          },
          socialImpact: {
            paragraph: [
              "The purpose of this dataset is to help develop better question answering systems.",
              "The statement should include both positive outlooks, such as outlining how technologies developed through its use may improve people's lives, and discuss the accompanying risks. These risks may range from making important decisions more opaque to people who are affected by the technology, to reinforcing existing harmful biases (whose specifics should be discussed in the next section), among other considerations.",
              "Please also mention in this section if the proposed dataset contains a *low-resource* or under-represented language."
            ],
            example: [
              "The purpose of this dataset is to help develop better question answering systems.",
              "A system that succeeds at the supported task would be able to provide a coherent answer to even complex questions requiring a multi-step explanation, which is beyond the ability of even the larger existing models. The task is also thought as a test-bed for retrieval model which can show the users which source text was used in generating the answer and allow them to confirm the information provided to them.",
              "It should be noted however that the provided answers were written by Reddit users, an information which may be lost if models trained on it are deployed in down-stream applications and presented to users without context. The specific biases this may introduce are discussed in the next section."
            ]
          },
          biasesDiscussion: {
            paragraph: [
              "Provide descriptions of specific biases that are likely to be reflected in the data, and state whether any steps were taken to reduce their impact.",
              "For Wikipedia text, see for example [Dinan et al 2020 on biases in Wikipedia (esp. Table 1)](https://arxiv.org/abs/2005.00614), or [Blodgett et al 2020](https://www.aclweb.org/anthology/2020.acl-main.485/) for a more general discussion of the topic.",
              "If analyses have been run quantifying these biases, please add brief summaries and links to the studies here."
            ],
            example: [
              "While Reddit hosts a number of thriving communities with high quality discussions, it is also widely known to have corners where sexism, hate, and harassment are significant issues. See for example the  [recent post from Reddit founder u/spez](https://www.reddit.com/r/announcements/comments/gxas21/upcoming_changes_to_our_content_policy_our_board/)  outlining some of the ways he thinks the website's historical policies have been responsible for this problem,  [Adrienne Massanari's 2015 article on GamerGate](https://www.researchgate.net/publication/283848479_Gamergate_and_The_Fappening_How_Reddit's_algorithm_governance_and_culture_support_toxic_technocultures)  and follow-up works, or a  [2019 Wired article on misogyny on Reddit](https://www.wired.com/story/misogyny-reddit-research/).",
              "While there has been some recent work in the NLP community on  *de-biasing*  models (e.g.  [Black is to Criminal as Caucasian is to Police: Detecting and Removing Multiclass Bias in Word Embeddings](https://arxiv.org/abs/1904.04047)  for word embeddings trained specifically on Reddit data), this problem is far from solved, and the likelihood that a trained model might learn the biases present in the data remains a significant concern.",
              `We still note some encouraging signs for all of these communities:  [r/explainlikeimfive](https://www.reddit.com/r/explainlikeimfive/)  and  [r/askscience](https://www.reddit.com/r/askscience/)  have similar structures and purposes, and  [r/askscience](https://www.reddit.com/r/askscience/)  was found in 2015 to show medium supportiveness and very low toxicity when compared to other subreddits (see a  [hackerfall post](https://hackerfall.com/story/study-and-interactive-visualization-of-toxicity-in),  [thecut.com write-up](https://www.thecut.com/2015/03/interactive-chart-of-reddits-toxicity.html)  and supporting  [data](https://chart-studio.plotly.com/~bsbell21/210/toxicity-vs-supportiveness-by-subreddit/#data)). Meanwhile, the  [r/AskHistorians rules](https://www.reddit.com/r/AskHistorians/wiki/rules)  mention that the admins will not tolerate "_racism, sexism, or any other forms of bigotry_". However, further analysis of whether and to what extent these rules reduce toxicity is still needed.`,
              "We also note that given the audience of the Reddit website which is more broadly used in the US and Europe, the answers will likely present a Western perspectives, which is particularly important to note when dealing with historical topics."
            ]
          },
          limitations: {
            paragraph: [
              "If studies of the datasets have outlined other limitations of the dataset, such as annotation artifacts, please outline and cite them here."
            ],
            example: [
              "The answers provided in the dataset are represent the opinion of Reddit users. While these communities strive to be helpful, they should not be considered to represent a ground truth."
            ]
          },
          datasetCurators: {
            paragraph: [
              "List the people involved in collecting the dataset and their affiliation(s). If funding information is known, include it here."
            ],
            example: [
              "The dataset was initially created by Angela Fan, Ethan Perez, Yacine Jernite, Jason Weston, Michael Auli, and David Grangier, during work done at Facebook AI Research (FAIR)."
            ]
          },
          licensingInformation: {
            paragraph: [
              "Provide the license and link to the license webpage if available."
            ],
            example: [
              "The licensing status of the dataset hinges on the legal status of the [Pushshift.io](https://files.pushshift.io/reddit/) data which is unclear."
            ]
          },
          citationInformation: {
            paragraph: [
              "Provide the [BibTex](http://www.bibtex.org/)-formatted reference for the dataset. For example:",
              `
              @article{article_id,
                author    = {Author List},
                title     = {Dataset Paper Title},
                journal   = {Publication Venue},
                year      = {2525}
              }
              `,
              "If the dataset has a [DOI](https://www.doi.org/), please provide it here."
            ],
            example: [
              `
              @inproceedings{eli5_lfqa,
                author    = {Angela Fan and
                            Yacine Jernite and
                            Ethan Perez and
                            David Grangier and
                            Jason Weston and
                            Michael Auli},
                editor    = {Anna Korhonen and
                            David R. Traum and
                            Llu{\'{\i}}s M{\`{a}}rquez},
                title     = {{ELI5:} Long Form Question Answering},
                booktitle = {Proceedings of the 57th Conference of the Association for Computational
                            Linguistics, {ACL} 2019, Florence, Italy, July 28- August 2, 2019,
                            Volume 1: Long Papers},
                pages     = {3558--3567},
                publisher = {Association for Computational Linguistics},
                year      = {2019},
                url       = {https://doi.org/10.18653/v1/p19-1346},
                doi       = {10.18653/v1/p19-1346}
              }
              `
            ]
          },
    }
}