# Photo Gallery Website
View live demo here [PhotoGallery](https://walt-image-gallery.netlify.app/)

### Default Login credentials:
* email: user@example.com
* password: 1Password

## Overview
The Photo Gallery is a web application that allows users to explore and manage a collection of images. Users can log in to the gallery, browse through images, and use the Drag-and-Drop feature to rearrange the image order within the gallery. This README provides detailed instructions on how to set up and run the project locally.

**Prerequisites**
Before you begin, ensure you have met the following requirements:

*Make sure you have Node.js installed on your machine. You can download it from [Node.js](nodejs.org.)*

### Installation
Follow these steps to set up the project locally:

1. **Clone the Repository:** Start by cloning the repository to your local machine using Git:

    ```bash
    git clone https://github.com/Walter-Tronics/HNGx_task_3.git
    ```

2. **Navigate to the Project Directory:** Change your current directory to the project folder:
    ```bash
    cd PhotoGallery
    ```

3. **Install Dependencies:** Install the project dependencies using npm:
    ```bash
    npm install
    ```
    
### Usage
To run the Photo Gallery locally, follow these steps:

1. **Start the Development Server:** Launch the Vite development server:
   ```bash
    npm run dev
    ```

3. **Open in Browser:** Open your web browser and navigate to http://localhost:5173 to access the PhotoGallery.

### Features
- **User Authentication**: Users can sign up and log in to the gallery.
- **Image Display**: Display a collection of images with titles and tags.
- **Drag-and-Drop**: Users can rearrange images within the gallery using the Drag-and-Drop feature.
- **Image Search**: Users can search for images by tags.
- **Responsive Design**: The app is responsive and adapts to different screen sizes.

### Technologies Used
- Vite: The project uses Vite as the build tool and development server.
- React: The frontend is built with React for UI components.
- Supabase: Supabase is used for user authentication.
- React-beautiful-dnd: The Drag-and-Drop feature is implemented using react-beautiful-dnd.
