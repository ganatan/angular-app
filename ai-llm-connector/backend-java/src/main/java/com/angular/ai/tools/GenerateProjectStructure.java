package com.angular.ai.tools;

import java.io.File;

public class GenerateProjectStructure {
	public static void main(String[] args) {
		String projectPath = ".";
		File projectDir = new File(projectPath);

		if (projectDir.exists() && projectDir.isDirectory()) {
			listFiles(projectDir, 0);
		} else {
			System.out.println("Invalid project directory: " + projectPath);
		}
	}

	private static void listFiles(File directory, int level) {
		File[] files = directory.listFiles();
		if (files == null) {
			return;
		}

		for (File file : files) {
			System.out.println("  ".repeat(level) + "- " + file.getName());
			if (file.isDirectory()) {
				listFiles(file, level + 1);
			}
		}
	}
}
