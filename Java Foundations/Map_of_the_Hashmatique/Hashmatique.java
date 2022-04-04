import java.util.HashMap;
import java.util.Set;

public class Hashmatique {
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("titleOne", "First Lyric");
        trackList.put("titleSecond", "Second Lyric");
        trackList.put("titleThird", "Third Lyric");
        trackList.put("titleFour", "Four Lyric");
        
        System.out.println(trackList.get("titleOne"));

        Set<String> Lyrics = trackList.keySet();
        for(String Track: Lyrics){
            System.out.println(Track + ": " + trackList.get(Track));
        }
    }
}