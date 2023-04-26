// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


use std::fs;

// get files in a folder
#[tauri::command]
fn get_files(path: String) -> Vec<String> {
    let mut files = Vec::new();
    
    if let Ok(entries) = fs::read_dir(path) {
        for entry in entries {
            if let Ok(entry) = entry {
                if let Some(file_name) = entry.file_name().to_str() {
                    files.push(file_name.to_string());
                }
            }
        }
    }
    files.into()
}


//read a file
use std::fs::File;
use std::io::prelude::*;
#[tauri::command]
fn read_file(filepath: String) -> String {
    println!("{}",filepath);
    let new_path = filepath.replace('\\', "/");
    println!("{}",new_path);
    let mut file = match File::open(new_path) {
        Ok(file) => file,
        Err(e) => {
            return e.to_string()
        }
    };
    let mut contents = String::new();
    file.read_to_string(&mut contents).expect("Failed to read file");
    
    contents.into()

}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet,get_files,read_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
