import React from 'react';
import { observer } from 'mobx-react-lite';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Button from 'components/Button';

interface IProps {
  userId: string;
}

export default observer((props: IProps) => {
  return (
    <div className="rounded-12 bg-white py-3 pr-6 w-full box-border flex items-center justify-between">
      <div className="flex items-center">
        <div className="cursor-pointer px-6 py-2">
          <HiArrowNarrowLeft className="text-black text-22" />
        </div>
        <div className="flex relative">
          <div>
            <div className="text-gray-88 font-bold">
              {props.userId.slice(-8)}
            </div>
            <div className="mt-[2px] text-12 text-gray-bd">12 条内容</div>
          </div>
        </div>
      </div>
      <Button size="small">关注</Button>
    </div>
  );
});
