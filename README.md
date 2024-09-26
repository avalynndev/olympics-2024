<center> <h1> Olympics 2024</h1> </center>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,ts" />
  <br/>
  <a href="https://movie-web.github.io/links/discord"><kbd>⚫️ shadcn-ui</kbd></a> <a href="https://movie-web.github.io/docs"><kbd>🟡 json</kbd></a>
</p>
<br/><br/> 

# ⚡What is Olympics 2024?

Olympics 2024 is a comprehensive web app designed to provide detailed information and analytics about the 2024 Olympic Games.

This service offers real-time data, athlete profiles, event analytics, and more, all presented in an intuitive and aesthetic user interface.

# 🔥Features

- Real-time updates on Olympic events and results.
- Detailed athlete profiles <a href="https://github.com/avalynndev/olympics-2024/blob/main/data/athletes.json"><b>(not shown on client as it's too large and might impact performance)</b></a>
- Live and historical medal counts by country, sport, and event.
- Custom data exports for further analysis or integration into other projects.
- Minimalistic interface that focuses on essential information.

## 🍄 Philosophy

This project aims to be a simple and easy-to-use platform for Olympic enthusiasts. We focus on providing essential features that are polished and user-friendly.

We strive to keep the project lightweight and efficient, ensuring that hosting is as cheap and simple as possible.

All data is fetched from reliable sources, ensuring that users have access to accurate and up-to-date information.

## ⚠️ Limitations
Large JSON files are sent to the client, which can be heavy and impact performance.

# 🧬 Self Hosting Guide

To host the Olympics 2024 web app yourself, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/avalynndev/olympics-2024.git
    cd olympics-2024
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory of the project. You can use the `example.env` file as a reference for the required environment variables.

4. **Run the Development Server**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    ```

6. **Start the Production Server**:
    ```bash
    npm start
    ```

7. **Access the Application**:
    Open your web browser and navigate to `http://localhost:3000` to see the application running locally.

> [!NOTE]
> Ensure you have Node.js version 20+ installed on your machine. Refer to the [Installing Node.js](#installing-nodejs) section for guidance on how to install Node.js.

By following these steps, you can host the Olympics 2024 web app on your own server and make it accessible to users.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Favalynndev%2Folympics-2024)

## 🥔 Installing Node.js

To install Node.js, follow these steps:

1. **Download Node.js**: Visit the [Node.js download page](https://nodejs.org/) and download the installer for your operating system.

2. **Run the Installer**: Open the downloaded file and follow the installation instructions.

3. **Verify Installation**: Open a terminal or command prompt and run the following commands to verify the installation:
    ```bash
    node -v
    npm -v
    ```

## 📄 Pages
- [/](https://olympics-avalynndev.vercel.app/)
- [/history](https://olympics-avalynndev.vercel.app/history)
- [/news](https://olympics-avalynndev.vercel.app/news)
- [/medals](https://olympics-avalynndev.vercel.app/medals)
- [/medalists](https://olympics-avalynndev.vercel.app/medalists)
- [/venues](https://olympics-avalynndev.vercel.app/venues)
- [/schedule](https://olympics-avalynndev.vercel.app/schedule)
- [/highlights](https://olympics-avalynndev.vercel.app/highlights)
- [/results](https://olympics-avalynndev.vercel.app/results)
- [/dashboard](https://olympics-avalynndev.vercel.app/dashboard)
- [/events](https://olympics-avalynndev.vercel.app/events)

## 🤝 Thanks to all Contributors
This project would not be possible without our amazing contributors and the community. Thanks a lot! Keep rocking 🍻.

- avalynndev -> main developer
- lennoncoder -> avalynndev's alt account 
- Amritanshu312 -> help for fixing some issues

## 📝 Notes and Credits
- Packages used can be viewed in `package.json`, the packages in `/packages` dir are edited versions of another package to suit this project needs
- All the `/data/__.json` files are fetched from [kaggle-olympicdata-piterfm](https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games/data) and [olympics-website](https://olympics.com/en/paris-2024/)
- This project utilizes shadcn-ui component library, to make some of the compoenents present in `/components/ui` dir
- For generating favicons this project used [favicongenerator](https://realfavicongenerator.net/)
- This project doesnt not have any kind of comments as I started it very late and didn't have the time to add comments describing the code
