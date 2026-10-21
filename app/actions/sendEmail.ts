"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Tous les champs sont requis." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Par défaut, ou votre domaine personnalisé plus tard
      to: "alexxngabo@gmail.com",
      subject: `📩 Nouveau message de ${name} (${email})`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      replyTo: email, // Permet de cliquer sur "Répondre" dans Gmail pour écrire directement au visiteur
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return { success: false, error: "Erreur lors de l'envoi du message." };
  }
}
