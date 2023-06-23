import { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Flex, TextInput, Button } from "@tremor/react";

export default function MailingList({ aps, disabled, token }) {
  const [recipient, setRecipient] = useState({ name: "", email: "" });
  const handleAddItem = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${aps}/mailingList/add`;
    // console.log(url, recipient);
    const res = await fetch(url, {
      method: "POST",
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipient),
    });
    console.log(res);
  };

  return (
    <Flex justifyContent="end" className="space-x-3">
      <TextInput
        className="max-w-xs"
        placeholder="mailing list name"
        type="text"
        value={recipient.name}
        onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
      />
      <TextInput
        className="max-w-xs"
        placeholder="e-mail address"
        type="email"
        value={recipient.email}
        onChange={(e) => setRecipient({ ...recipient, email: e.target.value })}
      />
      <Button
        icon={UserPlusIcon}
        variant="light"
        onClick={handleAddItem}
        disabled={disabled}
      >
        Add recipient
      </Button>
    </Flex>
  );
}
