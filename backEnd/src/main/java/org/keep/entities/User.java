package org.keep.entities;


import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Entity
@Table(name = "users")
@XmlRootElement
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "Lname")
    private String Lname;



    @OneToMany
    private List<Note> notes ;



    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(Note note) {
      notes.add(note);
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Column(name = "active")
    private Boolean active;

    @Column(name = "Fname")
    private String Fname;

    public String getGoogleId() {
        return googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Column(name = "googleId")
    private String googleId;

    @Column(name = "imageUrl")
    private String imageUrl;


    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "connected_date")
    private String connected_date;


    public User() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getLname() {
        return Lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLname(String lname) {
        Lname = lname;
    }

    public String getFname() {
        return Fname;
    }

    public void setFname(String fname) {
        Fname = fname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String setConnected_date() {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss dd/MM/yyyy");
        LocalDateTime now = LocalDateTime.now();


        this.connected_date = dtf.format(now);
        return connected_date;
    }

    public String getConnected_date() {
        return connected_date;
    }

}
