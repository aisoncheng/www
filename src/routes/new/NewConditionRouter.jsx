import { Layout, Menu, Icon} from 'antd';

import {connect} from 'dva'
import {Container,NewCondition,HeadComponent} from '../../components'

const NewConditionRouter = ({ dispatch, user}) => {
    return (
        <div>
          <HeadComponent />
          <Container >
              <NewCondition
                disabledTitle={'请勾选审批条件'}
                nextStep = {'/new/form'}
               />
          </Container>
        </div>
    );
}

export default connect(({user})=>({user}))(NewConditionRouter);
