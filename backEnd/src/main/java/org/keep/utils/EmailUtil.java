package org.keep.utils;

import com.liferay.util.mail.JavaMailUtil;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class EmailUtil {
    public static void send(String to){
//        String to = "simonatcha1@gmail.com"; // to address. It can be any like gmail, hotmail etc.
        final String from = "alicenkeng2@gmail.com"; // from address. As this is using Gmail SMTP.
        final String password = "Ange1234!"; // password for from mail address.

        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.socketFactory.port", "465");
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");

        Session session = Session.getInstance(prop, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject("Message from Java Simplifying Tech");

            String msg = "This email sent using JavaMailer API from Java Code test 2!!!";

            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(msg, "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);

//            MimeBodyPart attachmentBodyPart = new MimeBodyPart();
//            attachmentBodyPart.attachFile(new File("/home/simo/react-google-keep/backEnd/schedule-white-24dp.svg"));
//            multipart.addBodyPart(attachmentBodyPart);
            message.setContent(multipart);

            Transport.send(message);

            System.out.println("Mail successfully sent to.."+ to);

        } catch (MessagingException  e) {
            e.printStackTrace();
        }
    }

}
