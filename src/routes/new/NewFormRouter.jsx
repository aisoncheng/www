import { Layout, Menu, Icon} from 'antd';
import {connect} from 'dva'
import {Container,NewForm,HeadComponent} from '../../components'
const NewConditionRouter = ({ dispatch, user}) => {
    return (
        <div>
          <HeadComponent />
          <Container >
              <NewForm
                disabledTitle={'表单'}
                nextStep = {'/new/form'}
               />
          </Container>
        </div>
    );
}

export default connect(({user})=>({user}))(NewConditionRouter);
