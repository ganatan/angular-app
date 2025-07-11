package com.angular.ai.tools;

import org.junit.jupiter.api.Test;

import com.angular.ai.tools.GenerateProjectStructure;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertTrue;

class GenerateProjectStructureTest {

    @Test
    void main_shouldPrintProjectStructure() {
        // Arrange
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;
        System.setOut(new PrintStream(outContent));

        // Act
        GenerateProjectStructure.main(new String[]{});

        // Restore System.out
        System.setOut(originalOut);

        // Assert (on vérifie que des répertoires connus apparaissent)
        String output = outContent.toString();
        assertTrue(output.contains("src"), "Should contain 'src' directory");
        assertTrue(output.contains("pom.xml") || output.contains("build.gradle"), "Should contain build file");
    }
}
