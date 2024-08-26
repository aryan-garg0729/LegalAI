# Legal Assistant Using RAG and LLM

## Overview

This project is a sophisticated Legal Assistant designed to provide accurate, updated, and detailed information on legal cases. It leverages the power of Retrieval-Augmented Generation (RAG), cross encoder reranking, and a large language model (LLM) to deliver precise and contextually relevant legal information. The assistant can also update its knowledge using the Google Search API, ensuring that users receive the most current legal information available.

## Features

- **RAG (Retrieval-Augmented Generation):** Combines retrieval-based methods with generative models to produce more accurate and contextually aware responses.
  
- **Cross Encoder Reranking:** Enhances the quality of retrieved information by using a cross encoder to rerank the results, prioritizing the most relevant content.

- **LLM (Large Language Model):** Utilizes a powerful LLM (`google/gemma-2b-it`) to generate detailed explanations, summaries, and insights on various legal cases.

- **Google Search API Integration:** Enables the assistant to fetch and incorporate the latest information available on the web, ensuring up-to-date responses.

## How It Works

1. **User Query:** The user inputs a legal question or case-related query.
   
2. **Context Retrieval:** The system retrieves relevant documents or passages using a retrieval model.
   
3. **Cross Encoder Reranking:** The retrieved results are reranked using a cross encoder to ensure the most relevant and informative content is prioritized.
   
4. **LLM Generation:** The LLM generates a detailed response based on the reranked information.
   
5. **Google Search API:** If necessary, the assistant uses the Google Search API to update its knowledge base with the latest information, ensuring that the user receives the most current response.

## Usage

1. **Query the Assistant:**
   - Input your legal query directly into the console or interface.

2. **Receive Responses:**
   - The assistant will provide a detailed, accurate, and up-to-date response based on the query.

## Customization

- **Adjusting the Token Limit:** Modify the token limit for input and output to handle longer or shorter texts as needed.

- **Fine-Tuning:** Fine-tune the LLM (`google/gemma-2b-it`) for specific legal domains or cases to enhance the model's accuracy and relevance.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- Special thanks to the Hugging Face community for providing the tools and models that made this project possible.
- Thanks to Google for the Search API that allows the assistant to provide updated information.

