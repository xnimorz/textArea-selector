textArea-selector
=================

������ ������ ��������� �������� ������ �����, ��������� � ������� ���������������� �������.

������ �������������:
var a =  new TextareaExtension(document.getElementById("areaId"), function (a) { return a.indexOf('�') >= 0; });

�������� ������������ - TextareaExtension(target /*textarea node*/,process /*������� �������� �����*/, font /*���������������� ������ (�� ��������� 14px Arial*/);
