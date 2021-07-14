import React from 'react';
import { observer } from 'mobx-react-lite';
import Fade from '@material-ui/core/Fade';
import BackToTop from 'components/BackToTop';
import Editor from './Editor';
import Contents from './Contents';
import SidebarMenu from './SidebarMenu';
import Loading from 'components/Loading';
import UserHeader from './UserHeader';
import { useStore } from 'store';
import { FilterType } from 'store/activeGroup';

export default observer(() => {
  const { activeGroupStore, nodeStore } = useStore();

  return (
    <div className="flex flex-col items-center overflow-y-auto scroll-view">
      <div className="pt-6" />
      <SidebarMenu />
      {!activeGroupStore.loading && (
        <div className="w-[600px]">
          <Fade in={true} timeout={500}>
            {activeGroupStore.filterType === FilterType.ALL ? (
              <Editor />
            ) : (
              <UserHeader userId={nodeStore.info.user_id} />
            )}
          </Fade>
          <Contents />
        </div>
      )}
      {activeGroupStore.loading && (
        <div className="pt-20">
          <Loading />
        </div>
      )}
      <div className="pb-5" />
      <BackToTop elementSelector=".scroll-view" />

      <style jsx>{`
        .scroll-view {
          height: calc(100vh - 52px);
        }
      `}</style>
    </div>
  );
});
