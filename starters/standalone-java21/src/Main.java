import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("🎬 Réalisateurs célèbres");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(300, 250);

            String[] directors = {
                "Christopher Nolan",
                "Quentin Tarantino",
                "Steven Spielberg",
                "Martin Scorsese",
                "James Cameron",
                "Ridley Scott",
                "Denis Villeneuve"
            };

            JList<String> list = new JList<>(directors);
            list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
            JScrollPane scrollPane = new JScrollPane(list);

            frame.getContentPane().add(scrollPane);

            frame.setVisible(true);
        });
    }
}
