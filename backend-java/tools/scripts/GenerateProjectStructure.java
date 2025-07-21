package scripts;


import java.io.File;

public class GenerateProjectStructure {

    public static void main(String[] args) {
        String path = (args != null && args.length > 0) ? args[0] : ".";
        File projectDir = new File(path);

        if (isValidDirectory(projectDir)) {
            listFiles(projectDir, 0);
        } else {
            System.err.println("Invalid project directory: " + projectDir.getAbsolutePath());
        }
    }

    public static boolean isValidDirectory(File directory) {
        return directory.exists() && directory.isDirectory();
    }

    public static void listFiles(File directory, int level) {
        if (!isValidDirectory(directory) || shouldSkip(directory)) {
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

    public static boolean shouldSkip(File file) {
        String name = file.getName();
        return name.equals("bin") || name.equals("target") || name.equals(".settings");
    }
}
