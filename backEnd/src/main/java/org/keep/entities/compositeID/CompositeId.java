package org.keep.entities.compositeID;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Embeddable
public class CompositeId implements Serializable{


    protected Integer id;

    protected Integer user_id;


    public CompositeId( Integer user_id) {

        this.user_id = user_id;
    }

    public CompositeId() {

    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }


}
