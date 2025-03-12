import { cn } from "@/utils/cn";
import { useRef, useState, FormEvent } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface ContactFormProps {
  labelClass?: string;
  inputClass?: string;
  textareaClass?: string;
  buttonClass?: string;
  linkClass?: string;
}

export default function ContactForm({ labelClass, inputClass, buttonClass, linkClass }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdCiTPKAv6L-oQ6nZvr0X2FCK4E5ESRuyXo7Y23ioerZPFZKw/formResponse";

    try {
      await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }).then(() => {
        navigate("/contact/confirm");
        setIsSubmitting(false);
      });
    } catch (error) {
      console.error("Form submission error: ", error);
      setIsSubmitting(false);
    }
  };

  const handleInput = () => {
    const textarea = messageRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <section>
      <form id="messageForm" method="post" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="entry.1986819227" className={cn("text-base", labelClass)}>
              What's your name?
            </label>
            <input
              className={cn(" text-base px-2 py-2 rounded-md", inputClass)}
              type="text"
              name="entry.1986819227"
              id="name"
              disabled={isSubmitting}
              placeholder="Enter Your name (required)"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="entry.793109428" className={cn("", labelClass)}>
              How can I contact you back?
            </label>
            <input
              className={cn(" text-base px-2 py-2 rounded-md", inputClass)}
              type="text"
              name="entry.793109428"
              id="contact"
              disabled={isSubmitting}
              placeholder="Enter your phone or email (required)"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="entry.1185640954" className={cn("", labelClass)}>
              Any message for me?
            </label>
            <textarea
              name="entry.1185640954"
              className={cn(" text-base px-2 py-2 rounded-md", inputClass)}
              id="message"
              cols={30}
              rows={1}
              disabled={isSubmitting}
              placeholder="Enter Your message"
              onChange={handleInput}
              ref={messageRef}
            ></textarea>
          </div>
          <div className="flex w-full flex-col space-y-4 text-center ">
            <Button
              variant={"secondary"}
              size={"lg"}
              id="submitForm"
              type="submit"
              disabled={isSubmitting}
              className={cn("", buttonClass)}
            >
              {isSubmitting && <RiLoader4Fill className="size-4 animate-spin mr-2" />}
              Send
            </Button>
            <Link to="/contact" className={cn("text-slate-900 underline", linkClass)}>
              See more ways to connect?
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
