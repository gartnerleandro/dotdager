"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import "./ContactForm.css";

type FormValues = {
    name: string
    email: string
    message: string
}

const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    email: z.string().min(1, { message: 'Required' }),
    message: z.string().min(1, { message: 'Required' }),
  });

const ContactForm: React.FC = () => {
    const [emailSent, setEmailSent] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({ resolver: zodResolver(schema) });
    const onSubmit = handleSubmit(() => {
        sessionStorage.setItem("emailSent", "true");
        setEmailSent("true");
    });

    useEffect(() => {
        setEmailSent(sessionStorage.getItem("emailSent"));
    }, [])

    return emailSent ? (
        <div className="email-sent">
            <h4>Enviado</h4>
            <p>
                Te regalo este pepino para que te vayas comiendo mientras te respondo
            </p>
            <img src="/pepino.webp" alt="un pepino bien rico" width="128" height="128"  />
        </div>
    ) :(
        <form className="contact" onSubmit={onSubmit}>
            <input {...register("name")} placeholder="Mariano *" className={errors?.name ? "error" : ""} />
            {errors?.name && <p>{errors.name.message}</p>}

            <input {...register("email")} placeholder="email@email.com *" type="email" className={errors?.email ? "error" : ""} />
            {errors?.email && <p>{errors.email.message}</p>}

            <textarea {...register("message")} placeholder="Contame qué te pica *" className={errors?.message ? "error" : ""} />
            {errors?.message && <p>{errors.message.message}</p>}

            <input type="submit" value="Enviar" />
        </form>
    );
}

export default ContactForm;
