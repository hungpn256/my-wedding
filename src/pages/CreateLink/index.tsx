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
  const [me, setMe] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");

  return (
    <div style={{ maxWidth: 600, padding: 20 }}>
      <input
        type="text"
        name="name"
        placeholder="Tên gợi nhớ* VD: Dương bạn đại học"
        className="form-control mt-5"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        name="me"
        placeholder="Xưng hô là?"
        className="form-control mt-2"
        value={me}
        onChange={(e) => setMe(e.target.value)}
      />
      <button
        className="btn"
        type="submit"
        style={{ width: "214px" }}
        onClick={() => {
          setLink(
            `/?id=${encodeString(JSON.stringify({ value, forGroom: true }))}`
          );
          setText(
            `${value} ơi, ngày 09-10/11 này bố mẹ xây dựng hạnh phúc cho ${me}. Trân trọng mời ${value} đến tham dự bữa cơm thân mật với gia đình, chúc phúc cho vợ chồng ${me} lúc 16h00 ngày 09/11 tại thôn Long Tràng, Hoàng Diệu, Gia Lộc, Hải Dương.\n\n${
              location.origin
            }${`/?id=${encodeString(
              JSON.stringify({ value, forGroom: true })
            )}`}`
          );
        }}
      >
        <span className="h-lines" style={{ zIndex: 1 }}></span>
        <span className="v-lines" style={{ zIndex: 1 }}></span>
        Tạo nhà trai
      </button>
      <button
        className="btn"
        type="submit"
        style={{ width: "214px" }}
        onClick={() => {
          setLink(
            `/?id=${encodeString(JSON.stringify({ value, forGroom: false }))}`
          );
          setText(
            `${value} ơi, Ngày 9-10/11 này bố mẹ ${me} xây dựng hạnh phúc cho ${me}.  Trân trọng kính mời ${value} chiều Thứ Bảy lúc 16h00 ngày 9/11 tới dự bữa cơm thân mật và sáng Chủ Nhật ngày 10/11 đến đưa ${me} về nhà chồng nha ❤️\n\n${
              location.origin
            }${`/?id=${encodeString(
              JSON.stringify({ value, forGroom: false })
            )}`}`
          );
        }}
      >
        <span className="h-lines" style={{ zIndex: 1 }}></span>
        <span className="v-lines" style={{ zIndex: 1 }}></span>
        Tạo nhà gái
      </button>

      {link && (
        <div style={{ padding: 10 }}>
          <Link to={link} target="_blank">
            {link}
          </Link>
          <div>
            <CopyToClipboard
              text={`${location.origin}${link}`}
              onCopy={() => toast.success("Đã copy link")}
            >
              <span style={{ cursor: "pointer" }}>Copy to link clipboard</span>
            </CopyToClipboard>
          </div>
          <div style={{ marginTop: 40 }}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "100%", height: 200 }}
            />
            <CopyToClipboard
              text={text}
              onCopy={() => toast.success("Đã copy thư mời")}
            >
              <span style={{ cursor: "pointer", whiteSpace: "pre-wrap" }}>
                Copy thư
              </span>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateLink;
