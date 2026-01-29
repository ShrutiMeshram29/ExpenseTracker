import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Button  from '../components/UI/IconButton';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

function ManageExpenses({route, navigation}){
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
    }, [navigation, isEditing])

    function deleteExpenseHandler() {
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button  style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button onPress={confirmHandler}>{isEditing ? 'update' : 'Add'}</Button>
            </View>
        <View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                <IconButton 
                icon="trash" 
                color={GlobalStyles.colors.error500} 
                size={36} 
                onPress={ deleteExpenseHandler } 
                />
                </View>
            )}
        </View>
        </View>
    );
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container:{
        felx:1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        minWidth:120,
        marginHorizontal:8,
    },
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems:'center'
    },
});