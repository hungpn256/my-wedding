import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export const SECRET_KEY = "hunghaaa";

export const encodeString = (inputString?: string) => {
  const encoder = new TextEncoder();
  const utf8Array = encoder.encode(inputString);
  const base64String = btoa(String.fromCharCode(...utf8Array));
  return base64String;
};

export const decodeString = (encodedString?: string) => {
  if (!encodedString) return;
  try {
    const decodedString = atob(encodedString);
    const utf8Array = new Uint8Array(
      [...decodedString].map((char) => char.charCodeAt(0))
    );
    const decoder = new TextDecoder();
    return decoder.decode(utf8Array);
  } catch {
    throw new Error();
  }
};

const CreateLink = () => {
  const [value, setValue] = useState("");
  const [link, setLink] = useState("");
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Tên gợi nhớ* VD: Dương bạn đại học"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn"
        type="submit"
        style={{ width: "214px" }}
        onClick={() =>
          setLink(
            `/?id=${encodeString(JSON.stringify({ value, forGroom: true }))}`
          )
        }
      >
        <span className="h-lines" style={{ zIndex: 1 }}></span>
        <span className="v-lines" style={{ zIndex: 1 }}></span>
        Tạo nhà trai
      </button>
      <button
        className="btn"
        type="submit"
        style={{ width: "214px" }}
        onClick={() =>
          setLink(
            `/?id=${encodeString(JSON.stringify({ value, forGroom: false }))}`
          )
        }
      >
        <span className="h-lines" style={{ zIndex: 1 }}></span>
        <span className="v-lines" style={{ zIndex: 1 }}></span>
        Tạo nhà gái
      </button>

      {link && (
        <div>
          <Link to={link} target="_blank">
            {link}
          </Link>
          <div>
            <CopyToClipboard
              text={`${location.host}${link}`}
              onCopy={() => toast.success("Đã copy")}
            >
              <span style={{ cursor: "pointer" }}>
                Copy to clipboard with span
              </span>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateLink;
