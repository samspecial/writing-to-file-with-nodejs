
import fetch from "node-fetch";
import { writeFile } from "fs";

let url = "http://jsonplaceholder.typicode.com/posts", settings = { method: "GET" };


const getPosts = async () => {
    try {
        const response = await fetch(url, settings);
        const result = await response.json();
        // Writing to posts.json file present in result folder
        writeFile("./result/posts.json", JSON.stringify(result, null, 2), err => {
            // Check file writing operation status
            if (err) throw err;
            // Log status of wiriting operation to console
            console.log("Writing to file successful");
        })
    } catch (error) {
        console.log(`An error occured: ${error}`);
    }

}
getPosts();