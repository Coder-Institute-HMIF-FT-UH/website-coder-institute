interface IconProps {
  className?: string;
}

const EmailIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.50016 3.5H24.5002C25.1445 3.5 25.6668 4.02234 25.6668 4.66667V23.3333C25.6668 23.9777 25.1445 24.5 24.5002 24.5H3.50016C2.85584 24.5 2.3335 23.9777 2.3335 23.3333V4.66667C2.3335 4.02234 2.85584 3.5 3.50016 3.5ZM23.3335 8.44424L14.0839 16.7277L4.66683 8.4186V22.1667H23.3335V8.44424ZM5.26353 5.83333L14.0724 13.6057L22.7513 5.83333H5.26353Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EmailIcon;
