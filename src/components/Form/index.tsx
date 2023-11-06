import {
  hideFormPopup,
  hideGreetingsPopup,
  showGreetingsPopup,
} from "@/store/popups";
import { ChangeEventHandler } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {}

interface IForm {
  name: string;
  phone: string;
}

const Form = (props: Props) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const submit: SubmitHandler<IForm> = (formData) => {
    reset();
    hideFormPopup();
    showGreetingsPopup();
    setTimeout(hideGreetingsPopup, 3000);
  };

  const validatePhone: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.value = e.target.value.replace(/[^\+\d]+/g, "");
    if (e.target.value.length >= 14)
      e.target.value = e.target.value.slice(0, 13);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <p className="text-[2rem] font-bold text-center desktop:text-4xl mb-8 whitespace-nowrap">
        {t("form.title")}
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          data-error={errors.name ? true : false}
          {...register("name", { required: true })}
          className="w-full py-2 bg-transparent border-b border-foreground placeholder:text-neutral desktop:py-4 data-[error=true]:text-error data-[error=true]:border-error data-[error=true]:placeholder:text-error"
          type="text"
          placeholder={t("form.name")}
        />
        <input
          data-error={errors.phone ? true : false}
          {...register("phone", {
            required: true,
            pattern: /^(\+*\d{1,3}[- ]?)?\d{10}$/,
            maxLength: 15,
            onChange: validatePhone,
          })}
          className="w-full py-2 bg-transparent border-b border-foreground placeholder:text-neutral desktop:py-4 data-[error=true]:text-error data-[error=true]:border-error data-[error=true]:placeholder:text-error"
          type="tel"
          placeholder={t("form.tel")}
        />
      </div>

      <button className="w-full button">{t("form.button")}</button>
    </form>
  );
};

export { Form };
