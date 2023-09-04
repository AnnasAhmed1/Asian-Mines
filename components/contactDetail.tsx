import React from "react";

const ContactDetail = ({
  icon,
  detail,
  flexCol = true,
}: {
  icon: any;
  detail: any;
  flexCol?: boolean;
}) => {
  return (
    <p className="contact-detail">
      {icon}
      {detail}
    </p>
  );
};

export default ContactDetail;
