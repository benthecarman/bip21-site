import wallets from "../wallet_support.json";
import { CrossIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { CheckIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { QuestionIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { ScanIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { WalletIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { LightningIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { QrCodeIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { AlertIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

export default function Table() {
  function ynm(status) {
    return status === "yes" ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : status === "no" ? <CrossIcon className="w-8 h-8 text-bpr-pink" /> : status === "n/a" ? "N/A" : <QuestionIcon className="w-8 h-8 text-bpr-purple" />;
  }

  return (
    <div className="flex flex-col items-center px-4 w-full text-center">
      <div class="hidden md:flex flex w-full px-4 bb-solid border-b border-b-black mb-0 pb-4 text-xs xl:text-base">
        <div class="basis-4/12 text-left flex items-center justify-start">
          <WalletIcon className="w-8 h-8 text-black inline" />
          Wallet
        </div>
        <div class="basis-2/12 flex items-center justify-center">
          <ScanIcon className="w-8 h-8 text-black inline" />
          <span>Scans</span>
        </div>
        <div class="basis-2/12 flex items-center justify-center">
          <LightningIcon className="w-8 h-8 text-black inline" />
          <span>Lightning</span>
        </div>
        <div className="basis-2/12 flex items-center justify-center">
          <QrCodeIcon className="w-8 h-8 text-black inline" />
          <span>Creates</span>
        </div>
        <div className="basis-2/12 hidden md:block flex items-center justify-center">
          <AlertIcon className="w-8 h-8 text-black inline" />
          Issue
        </div>
      </div>
      <ul className="w-full m-0">
        {wallets.map((w) => (
          <li class="border-b border-black p-4 last:border-b-0">
            <div class="flex flex-wrap md:flex-nowrap rounded-xl items-center font-light">
              <div class="basis-full md:basis-4/12 text-left font-medium md:font-light">{w.wallet}</div>
              <div class="md:basis-2/12 flex items-center md:justify-center">
                <span className="sr-only">
                  {w.scans_bip21 === "yes" ? "Scans BIP21 QR codes" : w.scans_bip21 === "no" ? "Does not scan BIP21 QR codes" : "Unknown BIP21 support"}
                </span>
                <span className="hidden md:block">
                  {ynm(w.scans_bip21)}
                </span>
                {w.scans_bip21 === "yes" ?
                  <span className="flex md:hidden items-center mr-4">
                    <ScanIcon className="w-8 h-8 text-black inline" /> Scans
                  </span>
                : ""}
              </div>
              <div class="md:basis-2/12 flex justify-center">
                <span className="sr-only">
                  {w.recognizes_lightning === "yes" ? "Recognizes the lightning parameter" : w.recognizes_lightning === "no" ? "Does not scan BIP21 QR codes" : w.recognizes_lightning === "n/a" ? "Not Applicable" : "Unknown lightning support"}
                </span>
                <span className="hidden md:block">
                  {ynm(w.recognizes_lightning)}
                </span>
                {w.recognizes_lightning === "yes" ?
                  <span className="flex md:hidden items-center mr-4">
                    <LightningIcon className="w-8 h-8 text-black inline" />
                    Lightning
                  </span>
                : ""}
              </div>
              <div className="md:basis-2/12 flex justify-center">
                <span className="sr-only">
                  {w.creates_bip21 === "yes" ? "Creates BIP21 QR codes" : w.creates_bip21 === "no" ? "Does not create BIP21 QR codes" : "Unknown support for creating BIP21 QR codes"}
                </span>
                <span className="hidden md:block">
                  {ynm(w.creates_bip21)}
                </span>
                {w.creates_bip21 === "yes" ?
                  <span className="flex md:hidden items-center mr-4">
                    <QrCodeIcon className="w-8 h-8 text-black inline" /> <span>Creates</span>
                  </span>
                : ""}
              </div>
              <div className="md:basis-2/12 flex justify-center">
                <span className="sr-only">Link to issue:</span>
                { w.issue_link ?
                  <span className="mr-4 flex items-center">
                    <AlertIcon className="w-8 h-8 text-bpr-cyan inline md:hidden" />
                    <a href={w.issue_link} className="text-bpr-cyan">Issue</a>
                  </span>
                : '' }
              </div>
              <div className="md:hidden flex justify-center">
                { w.scans_bip21 !== "yes" && w.recognizes_lightning !== "yes" && w.creates_bip21 !== "yes" && !w.issue_link ?
                  <div>No support. Open an issue!</div>
                : ""}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
