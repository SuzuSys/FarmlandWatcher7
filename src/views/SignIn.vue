<template>
  <div>
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
export default {
  name: 'SignIn',
  data: () => ({
    user: undefined,
    authState: undefined,
    unsubscribeAuth: undefined,
    formFields: [
      {
        type: 'email',
        label: 'Custom email Label',
        placeholder: 'custom email placeholder',
        required: true
      },
      {
        type: 'password',
        label: 'Custom Password Label',
        placeholder: 'custom password placeholder',
        required: true
      }
    ]
  }),
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  beforeDestroy() {
    this.unsubscribeAuth();
    return onAuthUIStateChange;
  }
};
</script>