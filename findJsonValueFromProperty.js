let jsonTeste = {
    "UserControl": {
        "$": {
            "x:Class": "SMGPO.Maps.UC.UCAfloramento",
            "xmlns:my": "clr-namespace:SMGPO.Maps.UC",
            "xmlns": "http://schemas.microsoft.com/winfx/2006/xaml/presentation",
            "xmlns:x": "http://schemas.microsoft.com/winfx/2006/xaml",
            "Width": "900",
            "xmlns:MC1ControlsLib": "clr-namespace:MC1ControlsLib;assembly=MC1ControlsLib",
            "Loaded": "UserControl_Loaded"
        },
        "UserControl.Resources": [
            {
                "ResourceDictionary": [
                    {
                        "ResourceDictionary.MergedDictionaries": [
                            {
                                "ResourceDictionary": [
                                    {
                                        "$": {
                                            "Source": "/EnergisaCommon;component/XAMLResources/Styles.xaml"
                                        }
                                    }
                                ]
                            }
                        ],
                        "Style": [
                            {
                                "$": {
                                    "TargetType": "{x:Type TextBlock}",
                                    "BasedOn": "{StaticResource baseTextBlock}"
                                },
                                "Setter": [
                                    {
                                        "$": {
                                            "Property": "FontSize",
                                            "Value": "11"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "Grid": [
            {
                "$": {
                    "Name": "grdContainer"
                },
                "Grid.RowDefinitions": [
                    {
                        "RowDefinition": [
                            {
                                "$": {
                                    "Height": "Auto"
                                }
                            },
                            {
                                "$": {
                                    "Height": "*"
                                }
                            }
                        ]
                    }
                ],
                "TextBlock": [
                    {
                        "$": {
                            "Grid.Row": "0",
                            "Name": "lblHeader",
                            "Text": "AFLORAMENTO",
                            "Style": "{StaticResource normalTextBlock}",
                            "FontWeight": "Bold",
                            "Margin": "5"
                        }
                    }
                ],
                "MC1ControlsLib:MC1ScrollViewer": [
                    {
                        "$": {
                            "VerticalScrollBarVisibility": "Auto",
                            "Grid.Row": "1"
                        },
                        "UniformGrid": [
                            {
                                "$": {
                                    "Name": "Itens"
                                },
                                "Label": [
                                    {
                                        "$": {
                                            "Name": "lblUS_USER"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblCOD_EMPRESA"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblID_PROJETO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblSIST_ORIGEM"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblID"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblSIST_ORIGEM_OBJ"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblTIPO_ESTRUTURA"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblTIPO_PROPRIETARIO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblATOS_MIGRACAO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblDATA_INSTALACAO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblMATERIAL"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblNOME_PROPRIETARIO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblSTATUS"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblCOORD_X"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblCOORD_Y"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblLAST_UPDATE"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblWHO_UPDATED"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblCOMENTARIOS"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblTIPO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblDESC_LOCALIZACAO"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblCOD_EMPRESA_OWNER"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblID_OWNER"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblID_EDPOLE"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Name": "lblSIST_ORIGEM_OBJ_EDPOLE"
                                        }
                                    }
                                ],
                                "MC1ControlsLib:MC1TextBox": [
                                    {
                                        "$": {
                                            "Text": "{Binding Path=US_USER}",
                                            "MaxLength": "50",
                                            "x:Name": "txtUS_USER",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "US_USER",
                                            "LabelElement": "{Binding ElementName=lblUS_USER}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=COD_EMPRESA}",
                                            "MaxLength": "3",
                                            "MaxNumber": "1000",
                                            "x:Name": "txtCOD_EMPRESA",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "COD_EMPRESA",
                                            "LabelElement": "{Binding ElementName=lblCOD_EMPRESA}",
                                            "InputKeyboard": "Integer"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=ID_PROJETO}",
                                            "MaxLength": "16",
                                            "MaxNumber": "10000000000000000",
                                            "x:Name": "txtID_PROJETO",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "ID_PROJETO",
                                            "LabelElement": "{Binding ElementName=lblID_PROJETO}",
                                            "InputKeyboard": "Integer"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=SIST_ORIGEM}",
                                            "MaxLength": "20",
                                            "x:Name": "txtSIST_ORIGEM",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "SIST_ORIGEM",
                                            "LabelElement": "{Binding ElementName=lblSIST_ORIGEM}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=ID}",
                                            "MaxLength": "11",
                                            "MaxNumber": "100000000000",
                                            "x:Name": "txtID",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "ID",
                                            "LabelElement": "{Binding ElementName=lblID}",
                                            "InputKeyboard": "Integer"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=SIST_ORIGEM_OBJ}",
                                            "MaxLength": "20",
                                            "x:Name": "txtSIST_ORIGEM_OBJ",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "SIST_ORIGEM_OBJ",
                                            "LabelElement": "{Binding ElementName=lblSIST_ORIGEM_OBJ}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=TIPO_ESTRUTURA}",
                                            "MaxLength": "50",
                                            "x:Name": "txtTIPO_ESTRUTURA",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "TIPO_ESTRUTURA",
                                            "LabelElement": "{Binding ElementName=lblTIPO_ESTRUTURA}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=ATOS_MIGRACAO}",
                                            "MaxLength": "128",
                                            "x:Name": "txtATOS_MIGRACAO",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "ATOS_MIGRACAO",
                                            "LabelElement": "{Binding ElementName=lblATOS_MIGRACAO}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=COORD_X, ConverterCulture='pt-BR'}",
                                            "MaxLength": "15",
                                            "MaxNumber": "100000000000",
                                            "x:Name": "txtCOORD_X",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "COORD_X",
                                            "LabelElement": "{Binding ElementName=lblCOORD_X}",
                                            "InputKeyboard": "Decimal"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=COORD_Y, ConverterCulture='pt-BR'}",
                                            "MaxLength": "15",
                                            "MaxNumber": "100000000000",
                                            "x:Name": "txtCOORD_Y",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "COORD_Y",
                                            "LabelElement": "{Binding ElementName=lblCOORD_Y}",
                                            "InputKeyboard": "Decimal"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=WHO_UPDATED}",
                                            "MaxLength": "36",
                                            "x:Name": "txtWHO_UPDATED",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "WHO_UPDATED",
                                            "LabelElement": "{Binding ElementName=lblWHO_UPDATED}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=COMENTARIOS}",
                                            "MaxLength": "256",
                                            "x:Name": "txtCOMENTARIOS",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "COMENTARIOS",
                                            "LabelElement": "{Binding ElementName=lblCOMENTARIOS}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=DESC_LOCALIZACAO}",
                                            "MaxLength": "256",
                                            "x:Name": "txtDESC_LOCALIZACAO",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "DESC_LOCALIZACAO",
                                            "LabelElement": "{Binding ElementName=lblDESC_LOCALIZACAO}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=ID_EDPOLE}",
                                            "MaxLength": "11",
                                            "MaxNumber": "100000000000",
                                            "x:Name": "txtID_EDPOLE",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "ID_EDPOLE",
                                            "LabelElement": "{Binding ElementName=lblID_EDPOLE}",
                                            "InputKeyboard": "Integer"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Text": "{Binding Path=SIST_ORIGEM_OBJ_EDPOLE}",
                                            "MaxLength": "20",
                                            "x:Name": "txtSIST_ORIGEM_OBJ_EDPOLE",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "SIST_ORIGEM_OBJ_EDPOLE",
                                            "LabelElement": "{Binding ElementName=lblSIST_ORIGEM_OBJ_EDPOLE}",
                                            "InputKeyboard": "AlphaNumeric"
                                        }
                                    }
                                ],
                                "StackPanel": [
                                    {
                                        "$": {
                                            "Orientation": "Horizontal"
                                        },
                                        "MC1ControlsLib:MC1TextBox": [
                                            {
                                                "$": {
                                                    "Focusable": "False",
                                                    "IsReadOnly": "True",
                                                    "MinWidth": "100",
                                                    "MaxLength": "22",
                                                    "x:Name": "txtTIPO_PROPRIETARIO",
                                                    "Text": "{Binding Path=TIPO_PROPRIETARIO}",
                                                    "LabelElement": "{Binding ElementName=lblTIPO_PROPRIETARIO}",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "TIPO_PROPRIETARIO",
                                                    "InputKeyboard": "AlphaNumeric"
                                                }
                                            }
                                        ],
                                        "my:UCOwner": [
                                            {
                                                "$": {
                                                    "x:Name": "ctrOwnerTIPO_PROPRIETARIO",
                                                    "Foreground": "White",
                                                    "HorizontalAlignment": "Left",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "TIPO_PROPRIETARIO",
                                                    "Margin": "2,0,2,0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "$": {
                                            "Orientation": "Horizontal"
                                        },
                                        "MC1ControlsLib:MC1TextBox": [
                                            {
                                                "$": {
                                                    "Focusable": "False",
                                                    "IsReadOnly": "True",
                                                    "MinWidth": "100",
                                                    "MaxLength": "120",
                                                    "x:Name": "txtNOME_PROPRIETARIO",
                                                    "Text": "{Binding Path=NOME_PROPRIETARIO}",
                                                    "LabelElement": "{Binding ElementName=lblNOME_PROPRIETARIO}",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "NOME_PROPRIETARIO",
                                                    "InputKeyboard": "AlphaNumeric"
                                                }
                                            }
                                        ],
                                        "my:UCOwner": [
                                            {
                                                "$": {
                                                    "x:Name": "ctrOwnerNOME_PROPRIETARIO",
                                                    "Foreground": "White",
                                                    "HorizontalAlignment": "Left",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "NOME_PROPRIETARIO",
                                                    "Margin": "2,0,2,0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "$": {
                                            "Orientation": "Horizontal"
                                        },
                                        "MC1ControlsLib:MC1TextBox": [
                                            {
                                                "$": {
                                                    "Focusable": "False",
                                                    "IsReadOnly": "True",
                                                    "MinWidth": "100",
                                                    "MaxLength": "3",
                                                    "x:Name": "txtCOD_EMPRESA_OWNER",
                                                    "Text": "{Binding Path=COD_EMPRESA_OWNER}",
                                                    "LabelElement": "{Binding ElementName=lblCOD_EMPRESA_OWNER}",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "COD_EMPRESA_OWNER",
                                                    "InputKeyboard": "Integer"
                                                }
                                            }
                                        ],
                                        "my:UCOwner": [
                                            {
                                                "$": {
                                                    "x:Name": "ctrOwnerCOD_EMPRESA_OWNER",
                                                    "Foreground": "White",
                                                    "HorizontalAlignment": "Left",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "COD_EMPRESA_OWNER",
                                                    "Margin": "2,0,2,0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "$": {
                                            "Orientation": "Horizontal"
                                        },
                                        "MC1ControlsLib:MC1TextBox": [
                                            {
                                                "$": {
                                                    "Focusable": "False",
                                                    "IsReadOnly": "True",
                                                    "MinWidth": "100",
                                                    "MaxLength": "11",
                                                    "x:Name": "txtID_OWNER",
                                                    "Text": "{Binding Path=ID_OWNER}",
                                                    "LabelElement": "{Binding ElementName=lblID_OWNER}",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "ID_OWNER",
                                                    "InputKeyboard": "Integer"
                                                }
                                            }
                                        ],
                                        "my:UCOwner": [
                                            {
                                                "$": {
                                                    "x:Name": "ctrOwnerID_OWNER",
                                                    "Foreground": "White",
                                                    "HorizontalAlignment": "Left",
                                                    "SourceTableName": "AFLORAMENTO",
                                                    "SourceFieldName": "ID_OWNER",
                                                    "Margin": "2,0,2,0"
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "MC1ControlsLib:MC1Calendar": [
                                    {
                                        "$": {
                                            "CalendarData": "{Binding Path=DATA_INSTALACAO, Mode=TwoWay}",
                                            "HorizontalAlignment": "Stretch",
                                            "Width": "Auto",
                                            "x:Name": "cldDATA_INSTALACAO",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "DATA_INSTALACAO",
                                            "LabelElement": "{Binding ElementName=lblDATA_INSTALACAO}"
                                        }
                                    },
                                    {
                                        "$": {
                                            "CalendarData": "{Binding Path=LAST_UPDATE, Mode=TwoWay}",
                                            "HorizontalAlignment": "Stretch",
                                            "Width": "Auto",
                                            "x:Name": "cldLAST_UPDATE",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "LAST_UPDATE",
                                            "LabelElement": "{Binding ElementName=lblLAST_UPDATE}"
                                        }
                                    }
                                ],
                                "MC1ControlsLib:MC1Spinner": [
                                    {
                                        "$": {
                                            "Column1Visible": "true",
                                            "x:Name": "cmbMATERIAL",
                                            "Width": "Auto",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "MATERIAL",
                                            "SelectedItemText": "{Binding Path=MATERIAL, Mode=TwoWay}",
                                            "LabelElement": "{Binding ElementName=lblMATERIAL}"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Column1Visible": "true",
                                            "x:Name": "cmbSTATUS",
                                            "Width": "Auto",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "STATUS",
                                            "SelectedItemText": "{Binding Path=STATUS, Mode=TwoWay}",
                                            "LabelElement": "{Binding ElementName=lblSTATUS}"
                                        }
                                    },
                                    {
                                        "$": {
                                            "Column1Visible": "true",
                                            "x:Name": "cmbTIPO",
                                            "Width": "Auto",
                                            "SourceTableName": "AFLORAMENTO",
                                            "SourceFieldName": "TIPO",
                                            "SelectedItemText": "{Binding Path=TIPO, Mode=TwoWay}",
                                            "LabelElement": "{Binding ElementName=lblTIPO}"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "TabControl": [
                    {
                        "$": {
                            "Name": "tabControl",
                            "Grid.Row": "1",
                            "Visibility": "Collapsed"
                        }
                    }
                ]
            }
        ]
    }
}




const findJsonValueFromProperty = function(jsonObj, key) {
    if(!jsonObj) {
        return null;
    }
    if(jsonObj[key]) {
        return jsonObj[key];
    }
    if(jsonObj instanceof Array) {
        let valor = null
        for(let ob of jsonObj) {
            valor = findJsonValueFromProperty(ob, key);
        }
        return valor;
    }else if(jsonObj instanceof Object) {
        let valor = null;
        let keys = Object.keys(jsonObj);
        for(let k of keys) {
            if(k == key) {
                return jsonObj[key];
            }else{
                valor = findJsonValueFromProperty(jsonObj[k], key);
                if(valor)
                    return valor;
            }
        }
    } 

}


let valor = findJsonValueFromProperty(jsonTeste, "UniformGrid");
console.log(valor)