// Copyright 2021-2023 radroots - team authors & contributors
// SPDX-License-Identifier: UNLICENSED

import { useShakaGraphTeamMailReplyMutation } from "@shaka-team-library/graph/hooks";
import { useFold, useShape } from "@shaka-team-shapes/hooks";
import {
  ofRootShape,
  writeRootShapeEntracteFalse,
  writeRootShapeEntracteTrue,
  writeRootShapeReplyMessage,
  writeRootShapeReplySent,
  writeRootShapeVisibleReply,
} from "@shaka-team-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-team-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesTeamSessionReply = {
  basis: TypesShakaBasis & TypesFiguresTeamSessionReply;
};

export type TypesFiguresTeamSessionReply = {
  reply: [string, string, string];
};

/**
 * * Radroots Documentation
 *
 * @created 04 18 2023
 * @collection team feature
 * @notes [ ]
 *
 */
export const TeamSessionReply: React.FC<TypesTeamSessionReply> = ({
  basis,
}: TypesTeamSessionReply) => {
  useTranslation(basis.dictionary);

  const fold = useFold();
  const RootShape = useShape(ofRootShape);

  const [teamMailReply] = useShakaGraphTeamMailReplyMutation();

  React.useEffect(() => {
    //
    // @notes:
    if (RootShape.replySent) {
      fold(writeRootShapeReplySent(false));
      fold(writeRootShapeVisibleReply(false));
    }

    // end
    return;
  }, [RootShape.replySent, fold]);

  const lcTeamSessionReplyBack = React.useCallback(() => {
    //
    // @notes:
    fold(writeRootShapeVisibleReply(false));

    // end
    return;
  }, [fold]);

  const lcaTeamSessionReplySend = React.useCallback(async () => {
    //
    // @notes:

    //
    // conditions

    // error false
    // fold()

    // loading start
    fold(writeRootShapeEntracteTrue());

    //
    // run
    const run = async () => {
      try {
        //
        // start

        await teamMailReply({
          variables: {
            figure: {
              locale: `en`,
              to: RootShape.replyArr[0],
              from: RootShape.credential || ``,
              subject: RootShape.replyArr[1],
              msg: RootShape.replyMessage,
              msgPrev: basis.reply[2],
            },
          },
        });

        fold(writeRootShapeReplySent(true));

        // await new Promise((resolve) => setTimeout(resolve, 2000));

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeRootShapeEntracteFalse());
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    RootShape.credential,
    RootShape.replyArr,
    RootShape.replyMessage,
    basis.reply,
    fold,
    teamMailReply,
  ]);

  return (
    <>
      <div className={`flex flex-col w-full `}>
        <div className={`flex flex-row w-full `}>
          <div className={`flex text-secondary-content cursor-pointer`}>
            <button type={`button`} onClick={lcTeamSessionReplyBack}>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                fill={"none"}
                viewBox={"0 0 24 24"}
                strokeWidth={1.5}
                stroke={"currentColor"}
                className={"w-6 h-6"}
              >
                <path
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  d={"M15.75 19.5L8.25 12l7.5-7.5"}
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`flex flex-col w-full `}>
          <div className={`flex flex-row w-full pl-52`}>
            <p
              className={`font-apercu font-medium text-lg text-secondary-content `}
            >
              {"to: "}
              {basis.reply[0]}
            </p>
          </div>
          <div className={`flex flex-row w-full pl-52`}>
            <p
              className={`font-apercu font-medium text-lg text-secondary-content `}
            >
              {"subject: "}
              {basis.reply[1]}
            </p>
          </div>
          <div className={`flex flex-row w-full pl-52`}>
            <p
              className={`font-apercu font-medium text-lg text-secondary-content `}
            >
              {"message: "}
              {basis.reply[2]}
            </p>
          </div>
          <div className={`flex flex-row w-full pl-48 pt-8`}>
            <textarea
              className={"textarea w-full h-80 opacity-40"}
              placeholder={""}
              value={`${RootShape.replyMessage}`}
              onChange={({ target: { value } }) =>
                fold(writeRootShapeReplyMessage(value))
              }
            />
          </div>
          <div className={`flex flex-row w-full justify-end py-8`}>
            <button
              type={`button`}
              className={`btn btn-secondary-focus ${
                RootShape.entracte ? `loading` : ``
              }`}
              onClick={lcaTeamSessionReplySend}
            >
              {`send`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
