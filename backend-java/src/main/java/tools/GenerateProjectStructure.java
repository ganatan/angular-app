package tools;

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
		if (shouldSkip(directory)) {
			return;
		}

		File[] files = directory.listFiles();
		if (files == null) {
			return;
		}

		for (File file : files) {
			if (shouldSkip(file)) {
				continue;
			}
			System.out.println("  ".repeat(level) + "- " + file.getName());
			if (file.isDirectory()) {
				listFiles(file, level + 1);
			}
		}
	}

	private static boolean shouldSkip(File file) {
		String name = file.getName();
		return name.equals("bin") || name.equals("target") || name.equals(".git") ||
		       name.equals(".settings") || name.equals(".mvn") || name.equals(".idea") ||
		       name.equals("HELP.md") || name.equals("README.md") || name.equals("LICENSE") ||
		       name.equals(".classpath") || name.equals(".project") || name.equals(".gitignore") ||
		       name.equals("checkstyle.xml");
	}
}



//package com.angular.ai.tools;
//
//import java.io.File;
//
//public class GenerateProjectStructure {
//	public static void main(String[] args) {
//		String projectPath = ".";
//		File projectDir = new File(projectPath);
//
//		if (projectDir.exists() && projectDir.isDirectory()) {
//			listFiles(projectDir, 0);
//		} else {
//			System.out.println("Invalid project directory: " + projectPath);
//		}
//	}
//
//	private static void listFiles(File directory, int level) {
//		File[] files = directory.listFiles();
//		if (files == null) {
//			return;
//		}
//
//		for (File file : files) {
//			System.out.println("  ".repeat(level) + "- " + file.getName());
//			if (file.isDirectory()) {
//				listFiles(file, level + 1);
//			}
//		}
//	}
//}
