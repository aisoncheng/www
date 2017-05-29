import { Layout, Menu, Icon} from 'antd';
import {HeadComponent,Container,NoticeComponect}  from '../components'
import {connect} from 'dva'
const IndexPage = ({ dispatch, user,stepCfg}) => {
    return (
        <div>
          <HeadComponent />
          <Container >
              <NoticeComponect
                nextStep = {'/new/condition'}
              />
          </Container>
        </div>
    );
   console.log(user);
}

export default connect(({user,stepCfg})=>({user,stepCfg}))(IndexPage);
