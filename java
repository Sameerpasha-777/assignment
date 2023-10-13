
import java.util.Arrays;
import java.util.Collections;

public class shuffle {
public static void main(String[] args) {
	Integer[] numbers = {1, 2, 3, 4, 5, 6, 7};
    Collections.shuffle(Arrays.asList(numbers));
    System.out.println("Shuffled Array: " + Arrays.toString(numbers));
}
}
